import { defineConfig } from 'vite'

// Single static page; old site lives in backup/2025-site and is not built.
export default defineConfig({
  publicDir: 'public',
  build: { rollupOptions: { input: './index.html' } },
})
