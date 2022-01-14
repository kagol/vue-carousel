import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      composables: path.resolve(__dirname, './carousel/src/composables'),
    },
  },
  plugins: [vueJsx()],
})
