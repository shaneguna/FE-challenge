/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CAT_SEARCH_API_HOST: string,
  readonly VITE_CAT_SEARCH_API_SECRET: string,
  // more env variables here...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
