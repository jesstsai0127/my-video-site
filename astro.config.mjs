// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://songified-stories.netlify.app', // 這是你的正式網站網址
	integrations: [mdx(), sitemap()],
});