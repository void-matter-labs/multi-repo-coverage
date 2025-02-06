import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    setupFiles: ["./setup.ts"],
    environment: 'jsdom',
    coverage: {
      reporter: ['lcov', 'text'],
      exclude: ["./**/*.stories.ts", "./**/*.stories.tsx"]
    }
  }
})
