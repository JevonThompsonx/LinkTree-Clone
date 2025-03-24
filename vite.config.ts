import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000
  }, 
  preview: {
    port: 8080,
  },
  plugins: [react(), tailwindcss(), VitePWA({
    injectRegister: 'auto',
    registerType: 'autoUpdate',
    workbox: {
      globPatterns: ['**/*.{js,css,html,ico,png,svg}']
    },
    strategies: 'generateSW',
    manifest: {
      // name: 'add name',
      //short_name: 'add short name',
      start_url: "/",
      // description: 'Add description',
      //theme_color: 'add-color',
      //background_color: 'add-color',
      display: "standalone",
      //icons: [
        // add icon info
    }
  })],
})
