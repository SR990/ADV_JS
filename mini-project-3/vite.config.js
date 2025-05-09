/// <reference types="vitest" />
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [tailwindcss(), react()],
  test: {
    globals: true,         // Enables global `test`, `expect`, etc.
    environment: 'jsdom',  // Simulates the DOM for React component testing
  },
})
