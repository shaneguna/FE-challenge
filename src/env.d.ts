/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CAT_SEARCH_API_HOST: string,
  readonly VITE_CAT_SEARCH_API_SECRET: string,
  // more env variables here...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
