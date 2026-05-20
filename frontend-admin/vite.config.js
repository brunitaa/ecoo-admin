import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@ecoo/ui': path.resolve(__dirname, '../packages/ecoo-ui/src'),
    },
  },
  server: {
    port: 5175,
    proxy: { '/api': { target: 'http://localhost:3001', changeOrigin: true } },
  },
});
