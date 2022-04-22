<script lang="ts" setup>
    import {computed, ref} from "vue";
    import {useStore} from '@/store';
    import HomePage from "@/pages/HomePage.vue";
    import ContentSkeleton from "@/components/ContentSkeleton.vue";
    import DescriptionComponent from "@/components/DescriptionComponent.vue";
    import {CatActionTypes} from "@/store/modules/cats/action-types";

    const store = useStore()
    const defaultAnimateClass: string = 'motion-safe:animate-bounce'

    let show = ref<boolean>(false);
    let animate = ref(defaultAnimateClass)
    let selectedBreed = computed((): any => store.getters.getSelectedBreed)
    let breedList = computed((): any => store.getters.getBreedList)
    let breedData = computed((): any => breedList.value.data)
    let canLoadMore = computed((): boolean => store.getters.getCanLoadMore)

    store.watch((state, getters) => getters.getSelectedBreed, () => {
        show.value = false
        
        // add setTimeout, change unnecessary to observe instantaneously
        setTimeout(() => {
            if (canLoadMore.value === true) {
                animate.value = defaultAnimateClass
                show.value = true
                
                setInterval(() => {
                    animate.value = '';
                }, 5000);
            }
        }, 1000)
    })

    let loadMore = (): void => {
        store.dispatch(CatActionTypes.INCREMENT_PAGE, '')
        store.dispatch(CatActionTypes.API_GET_BY_BREED, selectedBreed.value)
        
        // add setTimeout, change unnecessary to observe instantaneously
        setTimeout(() => {
            show.value = canLoadMore.value
        }, 1000)
        
        return
    }
</script>
<template>
<header>
        <div>
            <img class="logo cursor-pointer ease-linear"
                 :class="animate"
                 src="@/assets/bongol.png"
                 v-if="show"
                 width="250"
                 height="250"
                 alt="ol"
                 @click="loadMore"
            />
            <img
                    alt="Not Vue logo"
                    class="logo"
                    src="@/assets/bongo.png"
                    width="250"
                    height="250"
                    v-else
            />
            <div v-if="breedData">
                <DescriptionComponent :breed-data="breedData"/>
            </div>
        </div>

        <div class=" wrapper">
            <Suspense>
                <HomePage/>
                <template #fallback>
                    <ContentSkeleton/>
                </template>
            </Suspense>
        </div>
    </header>
</template>