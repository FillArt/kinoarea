import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from "node:path";
import {configDefaults} from "vitest/config";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    exclude: [...configDefaults.exclude, "node_modules"],
  },
  base: '/kinoarea/',
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
})
