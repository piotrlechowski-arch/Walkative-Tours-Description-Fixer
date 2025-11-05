import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    const buildId = Date.now().toString(36);
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
        proxy: {
          '/api': {
            target: 'http://localhost:8080',
            changeOrigin: true,
          },
        },
      },
      build: {
        rollupOptions: {
          output: {
            entryFileNames: `assets/[name]-${buildId}.js`,
            chunkFileNames: `assets/[name]-${buildId}.js`,
            assetFileNames: `assets/[name]-${buildId}.[ext]`
          }
        }
      },
      plugins: [react()],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src'),
        }
      }
    };
});
