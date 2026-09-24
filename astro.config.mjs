// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://swissassociation.tw',
  base: '/',

  // The stylesheet is small once the font subsets are trimmed, so inline it:
  // one less render-blocking request on first load.
  build: {
    inlineStylesheets: 'always'
  },

  vite: {
    plugins: [tailwindcss()]
  }
});
