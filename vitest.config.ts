import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['**/*.test.ts'],
    setupFiles: [],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './TDDEfrei'),
    },
  },
  // For CommonJS projects with nodenext module resolution:
  optimizeDeps: {
    esbuildOptions: {
      // Keep ES modules for vitest to handle properly
      format: 'cjs',
      target: 'node18',
    },
  },
});
