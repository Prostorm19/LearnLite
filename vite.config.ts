import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  root: './frontend-master',
  plugins: [react()],
  css: {
    postcss: '../postcss.config.js',
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  }
})
