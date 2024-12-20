// @ts-check
import { defineConfig } from 'astro/config';

import sanity from '@sanity/astro';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [
      sanity({
          projectId: 'di98mlum',
          dataset: 'production',
          useCdn: false,
          apiVersion: '2024-07-24',
          studioBasePath: '/studio',
      }),
      ,
      react(),
      tailwind(),
  ],

  output: 'server',

  devToolbar: {
      enabled: false,
  },

  adapter: vercel(),
});