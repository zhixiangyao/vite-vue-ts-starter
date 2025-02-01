import type { ConfigEnv, UserConfigExport } from 'vite'
import fs from 'node:fs'
import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dotenv from 'dotenv'
import { defineConfig } from 'vite'

/**
 * https://vitejs.dev/config/
 */
const baseConfig: UserConfigExport = {
  plugins: [
    vue(),
    vueJsx({
      /**
       * options are passed on to @vue/babel-plugin-jsx
       * https://github.com/vuejs/jsx-next/blob/dev/packages/babel-plugin-jsx/README-zh_CN.md
       */
      optimize: true,
      enableObjectSlots: true,
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
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
  optimizeDeps: {},
}

export default ({ command, mode }: ConfigEnv) => {
  /**
   * Such as:
   * import.meta.env.MODE: {string}       The mode of the app runtime.
   * import.meta.env.BASE_URL: {string}   The base URL for deploying the app. This is determined by the base configuration entry.
   * import.meta.env.PROD: {boolean}      Whether the app is runtime in the production environment.
   * import.meta.env.DEV: {boolean}       Whether app runtime is in the development environment (always the opposite of import.meta.env.PROD).
   */

  const { VITE_APP_NODE_ENV, VITE_APP_TITLE } = dotenv.parse(fs.readFileSync(`.env.${mode}`))

  setTimeout(() => {
    console.log()
    console.log('\x1B[33m%s\x1B[0m', `🏭--NODE ENV (VITE_APP_NODE_ENV): ${VITE_APP_NODE_ENV}`)
    console.log('\x1B[36m%s\x1B[0m', `🏠--APP TITLE (VITE_APP_TITLE): ${VITE_APP_TITLE}`)
    console.log()
  }, 66)

  if (command === 'serve') {
    return defineConfig({ ...baseConfig })
  }
  else {
    return defineConfig({ ...baseConfig })
  }
}
