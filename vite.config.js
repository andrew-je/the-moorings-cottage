import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load all environment variables
  const env = loadEnv(mode, process.cwd(), '');
  
  // Extract only the VITE_* environment variables
  const viteEnv = Object.entries(env).reduce((acc, [key, val]) => {
    if (key.startsWith('VITE_')) {
      acc[`import.meta.env.${key}`] = JSON.stringify(val);
    }
    return acc;
  }, {});

  return {
    plugins: [react()],
    
    // Expose environment variables to the client
    define: {
      ...viteEnv,
      // Support for process.env for any legacy code
      'process.env': {},
      // Ensure React Refresh works properly
      __APP_ENV__: JSON.stringify(env.NODE_ENV || 'development'),
    },
    
    // Server configuration
    server: {
      port: 3000,
      // Enable CORS for development
      cors: true,
      // Auto-open the browser
      open: true,
    },
    
    // Build configuration
    build: {
      // Minify the build
      minify: 'esbuild',
      // Output directory
      outDir: 'dist',
      // Source maps for better debugging
      sourcemap: true,
    },
    
    // Environment variables prefix
    envPrefix: 'VITE_',
    
    // Optimize dependencies
    optimizeDeps: {
      include: ['react', 'react-dom', 'posthog-js'],
      // Enable esbuild optimizations
      esbuildOptions: {
        target: 'es2020',
      },
    },
  };
});