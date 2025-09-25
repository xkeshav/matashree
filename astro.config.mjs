import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  site: 'https://yourusername.github.io',
  base: '/',
  output: 'static',
});
