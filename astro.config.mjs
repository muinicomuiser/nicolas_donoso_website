// @ts-check
import { defineConfig } from 'astro/config';

import netlify from '@astrojs/netlify';

// export default defineConfig({
//   site: 'https://muinicomuiser.github.io',
//   base: '/nicolas_donoso_website',
//   adapter: netlify(),
// });
export default defineConfig({
  adapter: netlify()
});