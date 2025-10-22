import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current directory
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [react()],
    // Expose env variables to the client
    define: {
      'process.env': {}
    },
    // Make environment variables available to the client
    server: {
      port: 3000,
    },
    // Ensure environment variables are loaded with the VITE_ prefix
    envPrefix: 'VITE_',
  };
});
