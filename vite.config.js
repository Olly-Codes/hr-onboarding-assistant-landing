import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/hr-onboarding-assistant-landing/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        thankYou: resolve(__dirname, 'thank-you.html'),
      },
    },
  },
})