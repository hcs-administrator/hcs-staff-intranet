import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env': env
    },
    plugins: [
      react(),
      tailwindcss(),
    ],
    server: {
      host: true,
      port: env.VITE_PORT,
    },
    assetsInclude: ['**/*.md']
  }
})