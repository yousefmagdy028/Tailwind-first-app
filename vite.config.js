import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc' // تغيير هنا

export default defineConfig({
  plugins: [react()],
  base:`/Tailwind-first-app/`
})