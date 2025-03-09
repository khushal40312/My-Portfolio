import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 5000, // Avoid warnings for larger models
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('models')) return 'models'; // Separate models into a chunk
        },
      },
    },
  },
})

