import type { ConfigEnv, UserConfigExport } from 'vite'
import fs from 'node:fs'
import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dotenv from 'dotenv'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

const r = (...args: string[]) => resolve(__dirname, ...args)

const baseConfig: UserConfigExport = {
  plugins: [
    vue(),
    vueJsx({
      optimize: true,
      enableObjectSlots: true,
    }),
    AutoImport({
      imports: ['vue'],
      dts: r('src/auto-imports.d.ts'),
      resolvers: [],
    }),
    Components({
      dirs: [r('src/components')],
      dts: r('src/components.d.ts'),
      resolvers: [],
    }),
  ],
  resolve: {
    alias: [
      {
        find: '~',
        replacement: r('src'),
      },
    ],
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
}

export default ({ command, mode }: ConfigEnv) => {
  const { VITE_APP_NODE_ENV } = dotenv.parse(fs.readFileSync(`.env.${mode}`))

  console.log('\x1B[33m%s\x1B[0m', `🏭--NODE ENV (VITE_APP_NODE_ENV): ${VITE_APP_NODE_ENV}`)

  if (command === 'serve') {
    return defineConfig({ ...baseConfig })
  }
  else {
    return defineConfig({ ...baseConfig })
  }
}
