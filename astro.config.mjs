import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import Icons from "unplugin-icons/vite";
import { FileSystemIconLoader } from "unplugin-icons/loaders";

export default defineConfig({
  output: "static",
  integrations: [react(), tailwind()],
  vite: {
    plugins: [
      Icons({
        compiler: "jsx",
        jsx: "react",
        customCollections: {
          "my-icons": FileSystemIconLoader("./src/assets/icons", (svg) =>
            svg.replace(/^<svg /, '<svg fill="currentColor" '),
          ),
        },
      }),
    ],
  },
});
