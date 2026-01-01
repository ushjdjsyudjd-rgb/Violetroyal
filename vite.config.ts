import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Violetroyal/', // این خط باعث می‌شود تمام فایل‌های CSS و JS در گیت‌هاب پیدا شوند
})
