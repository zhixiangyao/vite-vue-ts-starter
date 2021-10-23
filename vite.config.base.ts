import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import WindiCSS from 'vite-plugin-windicss'
import { resolve } from 'path'

import type { UserConfigExport } from 'vite'

/**
 * https://vitejs.dev/config/
 */
export const baseConfig: UserConfigExport = {
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // 任何 'ion-' 开头的元素都会被识别为自定义元素
          // isCustomElement: (tag) => tag.startsWith('ion-'),
          // ...
        },
      },
    }),
    vueJsx({
      /**
       * options are passed on to @vue/babel-plugin-jsx
       * https://github.com/vuejs/jsx-next/blob/dev/packages/babel-plugin-jsx/README-zh_CN.md
       */
      optimize: true,
      enableObjectSlots: true,
    }),
    WindiCSS(),
  ],
  resolve: {
    alias: [
      {
        find: '/@',
        replacement: resolve(__dirname, './src'),
      },
    ],
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
  optimizeDeps: {
    // include: [],
    include: ['vue', 'vuex', 'vue-router', 'nprogress', '@vueuse/core'],
  },
}
