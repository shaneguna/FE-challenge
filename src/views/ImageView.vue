<script setup lang="ts">
    import {computed, reactive} from 'vue'
    import {useStore} from '@/store';
    import {CatActionTypes} from "@/store/modules/cats/action-types";

    const store = useStore()

    store.watch((state, getters) => getters.getSelectedBreed, () => {
        let test = computed(() => store.getters.getSelectedBreed)
        store.dispatch(CatActionTypes.API_GET_BY_BREED, test.value)
    })


    let breedList = computed(() => store.getters.getBreedList)
    let breedImages = computed(() => {
        return breedList.value.images
    })
</script>

<template>
    <div class="overflow-auto">
        <div class="flex items-center justify-center min-h-screen" :style="'background-color: #4E5860'" v-show="breedImages">
            <div class="container h-full max-w-7xl px-4">
                <div class="grid grid-cols-2 grid-rows-1 m-auto auto-rows-max grid-flow-row-dense justify-center w-full mb-6 px-6 sm:px-6 lg:px-4">
                    <div :key="index"
                         v-for="(image, index) in breedImages">
                        <div class="mx-auto p-2">
                            <a :href="image.url" target="_blank">
                            <img class="
                                        object-cover
                                        h-52 in-h-full w-full h-auto
                                        rounded-2xl
                                        drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100
                                    "
                                 :src="image.url">
                                 </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
