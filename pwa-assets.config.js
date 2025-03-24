import {
  defineConfig,
  'minimal-2023' as preset,
} from '@vite-pwa/assets-generator/config'

export default defineConfig({
  preset,
  images: ['public/favicon.png'],
})
