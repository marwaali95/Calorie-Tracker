import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    headers: {
      key: "Cross-Origin-Embedder-Policy",
      value: "unsafe-none",    }
  }
})
