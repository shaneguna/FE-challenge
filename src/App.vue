<script setup lang="ts">
    import {computed} from "vue";
    import {useStore} from "@/store";
    import {RouterView} from "vue-router";
    import HeaderComponent from "@/components/HeaderComponent.vue";
    import ErrorBannerComponent from "@/components/ErrorBannerComponent.vue";

    const store = useStore()

    const showError = computed((): any => store.getters.isApiErrorEncountered)
</script>
<template>
    <ErrorBannerComponent v-show="showError" />
    <HeaderComponent v-show="!showError" />
    <RouterView/>
</template>
<style>
    #app {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;

        font-weight: normal;
    }

    header {
        line-height: 1.5;
        max-height: 100vh;
    }

    .logo {
        display: block;
        margin: 0 auto 2rem;
    }

    @media (min-width: 1024px) {
        body {
            display: flex;
            place-items: center;
        }

        #app {
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: 0 2rem;
        }

        header {
            display: flex;
            place-items: center;
            padding-right: calc(var(--section-gap) / 2);
        }

        header .wrapper {
            display: flex;
            place-items: flex-start;
            flex-wrap: wrap;
        }

        .logo {
            margin: 0 2rem 0 0;
        }
    }
</style>
