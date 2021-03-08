import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import WindiCSS from 'vite-plugin-windicss'

/**
 * https://vitejs.dev/config/
 */
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({
      /**
       * options are passed on to @vue/babel-plugin-jsx
       * https://github.com/vuejs/jsx-next/blob/dev/packages/babel-plugin-jsx/README-zh_CN.md
       */
      optimize: true,
    }),
    WindiCSS({
      safelist: 'prose prose-sm m-auto',
    }),
  ],
  resolve: {
    alias: [
      {
        find: '/@',
        replacement: resolve(__dirname, './src'),
      },
    ],
  },
})
