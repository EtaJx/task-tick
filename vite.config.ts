import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import * as path from 'path';

export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src')
    }
  },
  plugins: [reactRefresh()]
});
