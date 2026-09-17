// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// GitHub Pages project page. Cloudflare Pages is off the table for now —
// if that changes later, this is the one line to edit (site: '/', base: '/').
// https://astro.build/config
export default defineConfig({
  site: 'https://swiss-association-of-taiwan.github.io',
  base: '/sat-website',
  vite: {
    plugins: [tailwindcss()]
  }
});