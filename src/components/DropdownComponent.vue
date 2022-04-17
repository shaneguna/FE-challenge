<template>
    <div>
        <ul
                :class="showMenu ? 'flex' : 'hidden'"
                class="
          flex-col
          mt-8
          space-y-4
          md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-2
        "
        >
            <li>
                <div class="relative">
                    <!-- Dropdown toggle button -->
                    <button
                            @click="show = !show"
                            @mouseover="show = !show"
                            class="flex items-center text-indigo-100 bg-indigo-600 rounded-md focus:outline-none p-2"
                    >
                        <span class="mr-4">{{ selectedBreed ?? 'Breeds' }}</span>
                        <svg
                                class="w-5 h-5 text-indigo-100"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                        >
                            <path
                                    fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                            />
                        </svg>
                    </button>

                    <!-- Dropdown menu -->
                    <div
                            class="
                mt-2
                bg-indigo-500
                rounded-md
                shadow-xl
                lg:right-0
                w-44
                overflow-auto
              "
                            :class="{ 'h-52 py-2': show }"
                    >

                            <div
                                    :key="breed.id"
                                    v-show="show"
                                    v-for="breed in breeds"
                                    @click="selectBreed(breed.id, breed.name)"
                                    class="
                  block
                  px-4
                  py-2
                  text-sm text-indigo-100
                  hover:bg-indigo-400 hover:text-indigo-100
                "
                            >
                                {{breed.name}}
                            </div>

                        <!--<router-link
                                to="/"
                                class="
                  block
                  px-4
                  py-2
                  text-sm text-indigo-100
                  hover:bg-indigo-400 hover:text-indigo-100
                "
                        >
                        </router-link>-->
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script setup lang="ts">
    import {computed, reactive, ref} from 'vue';
    import {getBreeds} from '@/services/cats-api/getBreeds'

    let showMenu = ref<boolean>(false);
    let show = ref<boolean>(false);
    let selectedBreed = ref<string | null>(null);

    const toggleNav = () => (showMenu.value = !showMenu.value);
    const apiResponse = await getBreeds();
    //console.log(await getBreeds())
    const breeds = computed(() => reactive(apiResponse))

    let selectBreed = (id: number, name: string) => {
        show.value = !show
        selectedBreed.value = name
    }
</script>
