import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: { // This is where you configure Vitest
    environment: 'jsdom', // Set the test environment to jsdom for React testing
    globals: true,        // Enable global test APIs like describe, it, expect
  },
});
