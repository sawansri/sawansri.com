import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://sawansri.com",
  output: "static",
  trailingSlash: "always",
  markdown: {
    shikiConfig: {
      theme: "github-dark",
      wrap: true,
    },
  },
});
