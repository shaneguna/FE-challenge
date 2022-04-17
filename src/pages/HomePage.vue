<template>
    <div class="banner">
        <div class="container">
            <h1 class="logo-font">
                <!--                Cat {{heading}}-->
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
                <!--<template #fallback>
                   @TODO <ContentSkeleton />
                </template>-->

            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import DropdownComponent from "@/components/DropdownComponent.vue";
    import {computed, onMounted, reactive, Ref, ref} from 'vue';
    import {getBreeds} from '@/services/cats-api/getBreeds'

    let show = ref<boolean>(false);
    let selectedBreedResource = ref<object>({id: null, name: null})

    const apiResponse = await getBreeds();
    //console.log(await getBreeds())
    let breeds = computed(() => reactive(apiResponse))

    let onShowToggle = (arg: boolean) => {
        show.value = arg
    }

    let onBreedChange = (data: Ref<object>) => {
        console.log(data)
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
