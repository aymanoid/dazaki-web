import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import Icons from "unplugin-icons/vite";
import { FileSystemIconLoader } from "unplugin-icons/loaders";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  }),
  integrations: [react(), tailwind()],
  vite: {
    plugins: [Icons({
      compiler: "jsx",
      jsx: "react",
      customCollections: {
        "my-icons": FileSystemIconLoader("./src/assets/icons", svg => svg.replace(/^<svg /, '<svg fill="currentColor" '))
      }
    })]
  }
});