import { defineConfig, UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import WindiCSS from 'vite-plugin-windicss'
import dotenv from 'dotenv' // Dotenv 是一个零依赖的模块，它能将环境变量中的变量从 .env 文件加载到 process.env 中
import { resolve } from 'path'
import fs from 'fs'

const getEnv = (mode: string): any => {
  const envFiles = [/** mode file */ `.env.${mode}`]

  for (const envFile of envFiles) {
    try {
      const env = {}
      const envConfig = dotenv.parse(fs.readFileSync(envFile))
      for (const k in envConfig) {
        env[k] = envConfig[k]
      }
      return env
    } catch (error) {
      console.error(error)
    }
  }
}

/**
 * https://vitejs.dev/config/
 */
const userConfig = defineConfig({
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
    WindiCSS({
      scan: {
        dirs: ['.'], // all files in the cwd
        fileExtensions: ['vue', 'ts', 'tsx'], // also enabled scanning for js/ts
      },
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
})

export default ({ command, mode }): UserConfigExport => {
  /**
   * import.meta.env.MODE: {string} 应用运行的模式。
   * import.meta.env.BASE_URL: {string} 部署应用时的基本URL。他由base 配置项决定。
   * import.meta.env.PROD: {boolean} 应用是否运行在生产环境。
   * import.meta.env.DEV: {boolean} 应用是否运行在开发环境 (永远与 import.meta.env.PROD相反)。
   */

  const { VITE_APP_NODE_ENV, VITE_APP_TITLE } = getEnv(mode)
  const { log } = console

  setTimeout(() => {
    log()
    log('\x1b[33m%s\x1b[0m', `🏭--NODE环境(NODE_ENV): ${VITE_APP_NODE_ENV}`)
    log('\x1b[36m%s\x1b[0m', `🏠--APP标题(VITE_APP_TITLE): ${VITE_APP_TITLE}`)
    log()
  }, 66)

  if (command === 'serve') {
    // serve 独有配置
    return userConfig
  } else {
    // build 独有配置
    return userConfig
  }
}
