import react from '@astrojs/react';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://will-promotion.github.io',
  base: '/will-promotion.github.io',
  integrations: [react()],
});
