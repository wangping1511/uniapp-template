import path from 'node:path'
import uniModule from '@dcloudio/vite-plugin-uni'
import Components from '@uni-helper/vite-plugin-uni-components'
import { WotResolver } from '@uni-helper/vite-plugin-uni-components/resolvers'
import UniLayouts from '@uni-helper/vite-plugin-uni-layouts'
import UniManifest from '@uni-helper/vite-plugin-uni-manifest'
import UniPages from '@uni-helper/vite-plugin-uni-pages'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import { sliderProps } from 'wot-design-uni/components/wd-slider/types'

// @ts-expect-error missing types
const Uni = uniModule.default || uniModule

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Components({
      resolvers: [
        WotResolver(),
      ],
    }),
    UniPages(),
    UniLayouts(),
    UniManifest(),
    Uni(),
    UnoCSS(),
    AutoImport({
      imports: [
        'vue',
        'uni-app',
        'vue-i18n',
      ],
      dirs: [
        './stores',
        './composables',
      ],
      eslintrc: { enabled: true },
      vueTemplate: true,
    }),
  ],
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  server: {
    host: '0.0.0.0',
    hmr: true,
    proxy: {
      '/api': {
        target: '',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
})
