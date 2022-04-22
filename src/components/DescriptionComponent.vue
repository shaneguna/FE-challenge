<!--
    Hope it doesn't hurt to be different but ultimately, decided to keep description list in home as creating a separate view for each image
    looks off and redundant with the same data presented.
-->
<script lang="ts" setup>

    import {toRefs} from "vue";

    interface Props {
        breedData: any,
    }

    const props = defineProps<Props>()
    const {breedData} = toRefs(props)
</script>
<template>
    <section class="mt-6 max-w-screen-lg mx-auto px-2">
        <div class="pb-2">
            <header class="text-3xl font-semibold" style="color: #8F5564">
                {{breedData.name}}
            </header>
        </div>
        <div>
            <header class="text-1xl font-semibold" style="color: #A9CEC2">
                {{breedData.description}}
            </header>
        </div>

        <div class="mt-8 space-y-6 mr-4">
            <div class="p-5 rounded-md shadow-sm" style="background: #4A3747">
                <div>
                    <div class="justify-between sm:flex">
                        <div class="flex-1">
                            <p class="text-lg font-medium text-indigo-100">
                                Country of Origin
                            </p>
                            <p class="text-gray-500 mt-2 pr-2 text-indigo-200">
                                {{breedData.origin}}
                            </p>
                            <p class="text-lg mt-2 font-medium text-indigo-100">
                                Temperaments
                            </p>
                            <p class="text-gray-500 mt-1 pr-2 text-indigo-200">
                                {{breedData.temperament}}
                            </p>
                            <p class="text-lg mt-2 font-medium text-indigo-100">
                                Life Span
                            </p>
                            <p class="text-gray-500 mt-1 mb-2 pr-2 text-indigo-200">
                                {{breedData.life_span}}
                            </p>
                            <a :href="breedData.wikipedia_url" target="_blank">
                                {{breedData.wikipedia_url}}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
