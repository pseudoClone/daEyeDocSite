import adapter from '@sveltejs/adapter-netlify'; // Change this line
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    // adapter-netlify doesn't usually need options,
    // but you can add { edge: true } if you want to use Netlify Edge Functions.
    adapter: adapter() 
  }
};

export default config;