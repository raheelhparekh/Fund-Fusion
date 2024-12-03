import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/applicant-login': `${import.meta.env.VITE_APP_API_URL}`,
      '/validator-login': `${import.meta.env.VITE_APP_API_URL}`,
      '/verify-applicant': `${import.meta.env.VITE_APP_API_URL}`,
      '/verify-validator': `${import.meta.env.VITE_APP_API_URL}`,
      '/submit': `${import.meta.env.VITE_APP_API_URL}`,
    }
  },
})