import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://will-promotion.github.io',
    outDir: "./docs",
    base: '/',
    integrations: [react()]
});