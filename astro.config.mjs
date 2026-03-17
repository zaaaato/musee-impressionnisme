import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://zaaaato.github.io",
  base: "/musee-impressionnisme",
  build: {
    assets: "_assets",
  },
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
  },
});
