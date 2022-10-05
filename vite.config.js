import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default ({ mode }) => {
  return  defineConfig({
    esbuild: {
      drop: mode=== 'development' ? [] : ['console', 'debugger']
    },
    plugins: [vue()]
})
}