import { defineConfig } from 'vite'

export default defineConfig({
  // Set the assets folder as the public directory
  // This will copy everything in assets/ to the root of dist/ maintaining the folder structure
  publicDir: 'assets',
  
  build: {
    rollupOptions: {
      input: './index.html'
    },
    // Ensure all asset types are handled properly
    assetsInlineLimit: 0, // Don't inline any assets, keep them as separate files
  },
  
  // Configure asset handling for various file types
  assetsInclude: [
    '**/*.pdf',
    '**/*.js',
    '**/*.png',
    '**/*.jpg',
    '**/*.jpeg',
    '**/*.gif',
    '**/*.svg',
    '**/*.ico',
    '**/*.woff',
    '**/*.woff2',
    '**/*.ttf',
    '**/*.eot'
  ]
})