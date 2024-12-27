import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/applicant-login': process.env.VITE_APP_API_URL,
      '/validator-login': process.env.VITE_APP_API_URL,
      '/verify-applicant': process.env.VITE_APP_API_URL,
      '/verify-validator': process.env.VITE_APP_API_URL,
      '/submit': process.env.VITE_APP_API_URL,
    },
    host: true,
    port: 5173,
  },
})
