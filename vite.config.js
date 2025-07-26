import { defineConfig } from 'vite';
import astro from '@astrojs/vite-plugin-astro';

export default defineConfig({
  plugins: [astro()],
  server: {
    host: true,
    port: 4321,
    strictPort: false,
    allowedHosts: 'all',
    hmr: {
      clientPort: 443,
    },
  }
});