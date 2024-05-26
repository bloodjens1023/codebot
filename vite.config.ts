import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'ads.txt',
          dest: ''
        }
      ]
    })
  ],
  base: 'https://github.com/bloodjens1023/codebot.git' // Remplacez 'votre-depot' par le nom de votre dépôt GitHub
})
