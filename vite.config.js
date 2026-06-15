import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    },
    // هذا السطر هو "السر" اللي بيحل مشكلة الـ Build
    chunkSizeWarningLimit: 1600, 
  }
})