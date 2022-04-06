declare global {
  interface Live2dWidgetOption {
    display?: {
      position?: 'right' | 'top' | 'left' | 'bottom'
      width?: number
      height?: number
      hOffset?: number
      vOffset?: number
    }
    react?: {
      opacityDefault?: number
      opacityOnHover?: number
    }
  }

  interface Window {
    L2Dwidget: {
      init: (option: Live2dWidgetOption) => void
    }
  }

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
