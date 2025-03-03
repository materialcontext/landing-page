import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-moon-landing.netlify.app/",
  integrations: [tailwind(), react()],
  vite: {
    ssr: {
      external: ["@11ty/eleventy-img", "svgo"]
    }
  }
});