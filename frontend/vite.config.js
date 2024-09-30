import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/applicant-login': 'http://localhost:3000/',
      '/validator-login': 'http://localhost:3000/',
      '/verify-applicant': 'http://localhost:3000/',
      '/verify-validator': 'http://localhost:3000/',
      '/submit': 'http://localhost:3000/',
    }
  },
})