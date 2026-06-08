import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  site: 'https://pioneers.example.com',
  integrations: [tailwind()],
  markdown: {
    syntaxHighlight: 'shiki'
  }
});
