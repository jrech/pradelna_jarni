import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.pradelnajarni.cz',
  output: 'static',
  build: {
    format: 'directory',
  },
});
