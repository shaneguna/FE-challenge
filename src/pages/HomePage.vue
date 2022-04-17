<script setup lang="ts">
    import DropdownComponent from "@/components/DropdownComponent.vue";
</script>
<template>
    <div class="banner">
        <div class="container">
            <h1 class="logo-font">
                Cat Surfer
            </h1>
            <p>A place to surf for cats. ฅ^•ﻌ•^ฅ</p>
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
