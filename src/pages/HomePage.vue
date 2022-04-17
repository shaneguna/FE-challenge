<script setup lang="ts">
    import DropdownComponent from "@/components/DropdownComponent.vue";
    import { onMounted, ref } from 'vue'

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
    <div class="banner">
        <div class="container">
            <h1 class="logo-font">
<!--                Cat {{heading}}-->
            </h1>
            <p>A place to surf for
                <a class="text-indigo-800" href="http://www.ohmagif.com/wp-content/uploads/2013/09/bastard-stop-treating-me-like-a-show-piece.gif">
                    cats
                </a>
                . ฅ^•ﻌ•^ฅ
            </p>
        </div>
        <div>
            <div>
                <Suspense>
                    <DropdownComponent />
                        <!--<template #fallback>
                           @TODO <ContentSkeleton />
                        </template>-->
                </Suspense>
            </div>
        </div>
    </div>
</template>
