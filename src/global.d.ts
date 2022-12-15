declare global {
  /**
   * https://vitejs.dev/guide/env-and-mode.html#intellisense-for-typescript
   *
   * IntelliSense for TypeScript:
   */

  interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    readonly VITE_APP_NODE_ENV: string
    // More Environment Variables...
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    nightNightSix: number
  }
}

export {}
