This app integrates TheCatAPI
https://thecatapi.com/

Developer: Shane Gunawardana `shanechioguna@gmail.com`

# Configuration

Copy and rename `.env.example` to `env` and add appropriate values.

| Variable | Description | Default Value
| --- | --- | :---:
| `VITE_CAT_SEARCH_API_HOST` | TheCatAPI base url | https://api.thecatapi.com/v1
| `VITE_CAT_SEARCH_API_SECRET` | TheCatAPI api key |

Register and get an api key from https://docs.thecatapi.com/

# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

# What's used?

- [x] [Vite](https://github.com/vitejs/vite)
- [x] [Composition API](https://composition-api.vuejs.org/)
- [x] [SFC \<script setup> sugar](https://v3.vuejs.org/api/sfc-script-setup.html)
- [x] [Suspense](https://v3.vuejs.org/guide/component-dynamic-async.html#using-with-suspense) (Experimental)
- [x] [Vue router](https://next.router.vuejs.org/)
- [x] State management ([Vuex 4](https://vuex.vuejs.org/) (store extension implemented)))
- [x] Type system [TypeScript](https://www.typescriptlang.org/) [Vue tsc](https://github.com/johnsoncodehk/vue-tsc)
- [x] Linter [ESLint](https://eslint.vuejs.org/)
- [x] Tailwind [Tailwind](https://tailwindcss.com/docs/)
- [ ] Unit test
- [ ] E2E test

# Getting started

```shell script
npm install
# Development
npm run dev
```

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).
