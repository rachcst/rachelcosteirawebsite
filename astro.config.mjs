import { defineConfig } from 'astro/config'
import pagefind from "astro-pagefind";

export default defineConfig({
  site: 'https://rachelcosteira.com',
  base: '/',
  integrations: [pagefind()],
});

