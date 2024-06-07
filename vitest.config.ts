import path from "path";
import { defineVitestConfig } from "@nuxt/test-utils/config";

export default defineVitestConfig({
  test: {
    globals: true,
    environment: "nuxt",
    environmentOptions: {
      nuxt: {
        domEnvironment: "jsdom",
      },
    },
    server: {
      deps: {
        inline: ["vuetify"],
      },
    },
    css: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "~": path.resolve(__dirname, "."),
    },
  },
});
