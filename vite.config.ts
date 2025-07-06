import type { ConfigEnv, UserConfig } from 'vite'
import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

const r = (path: string) => resolve(__dirname, path)

const baseConfig: UserConfig = {
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

export default ({ command }: ConfigEnv) => {
  if (command === 'serve') {
    return defineConfig(baseConfig)
  }
  else {
    return defineConfig(baseConfig)
  }
}
