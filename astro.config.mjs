import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import rehypePrettyCode from "rehype-pretty-code";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [tailwind({
    applyBaseStyles: false
  }), react(), mdx()],
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [[rehypePrettyCode, {
      theme: {
        light: "min-light",
        dark: "min-dark",
      },
    }]],
  },
});
