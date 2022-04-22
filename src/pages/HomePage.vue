<script setup lang="ts">
    import {computed, onMounted, reactive, Ref, ref} from 'vue'
    import {getBreeds} from '@/services/cats-api/getBreeds'
    import {useStore} from "@/store";
    import {CatActionTypes} from "@/store/modules/cats/action-types";
    import DropdownComponent from "@/components/DropdownComponent.vue";

    const store = useStore()
    store.dispatch(CatActionTypes.API_GET_BREEDS, null)
    let breeds = computed((): any[] => store.getters.getBreedsList)

    let show = ref<boolean>(false);
    let onShowToggle = (arg: boolean) => {
        show.value = arg
    }

    let selectedBreedResource = reactive<object>({id: null, name: null})
    let onBreedChange = (data: Ref<object>) => {
        selectedBreedResource.value = data
    }

    let heading = ref<string>('')
    const setHeading = () => {
        let headings = [
            'surfer',
            'searcher',
            'quester',
            'seeker',
            'hunter',
            'finder',
        ];

        setInterval(() => {
            heading.value = headings[Math.floor(Math.random() * headings.length)];
        }, 2000);
    }

    onMounted(() => {
        setHeading()
    })
</script>
<template>
    <div>
        <div class="banner">
            <div class="container">
                <h1 class="logo-font">
                    Cat <span class="animate-pulse">{{heading}}</span>
                </h1>
                <p>A place to surf for
                    <a class="text-indigo-800"
                       href="http://www.ohmagif.com/wp-content/uploads/2013/09/bastard-stop-treating-me-like-a-show-piece.gif">
                        cats
                    </a>
                    . ฅ^•ﻌ•^ฅ
                </p>
            </div>
            <div>
                <div>
                    <DropdownComponent :show="show" :breeds="breeds" :selectedBreed="selectedBreedResource.name"
                                       @show-toggle="onShowToggle" @breed-change="onBreedChange"/>
                </div>
            </div>
        </div>
    </div>
</template>
