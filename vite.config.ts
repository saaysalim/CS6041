import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/MyPortfolio/", // The base URL for your app
  plugins: [react()],     // Corrected key 'plugins' instead of 'plugin'
})