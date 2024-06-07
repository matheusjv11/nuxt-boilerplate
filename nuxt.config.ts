import path from "path";
import vuetify from "vite-plugin-vuetify";
import { routes } from "./routes";

/**
 * Here you define the path where your application is located.
 * Depending whether it is hosted on a root DNS or subpath, you'll
 * have to set the URL_PATH accordingly.
 *
 * Root example:
 *  - dns: https://my-application.com
 *  - URL_PATH = ""
 *
 * Subpath example:
 *  - dns: https://application-group.com/front/my-application
 *  - URL_PATH = "/front/my-application"
 */
const URL_PATH = "";

/**
 * General definitions on your Nuxt application
 * Learn more on: https://nuxt.com/docs/api/nuxt-config
 */
export default defineNuxtConfig({
  ssr: true,
  meta: [
    {
      name: "Your application description here",
      content: "Nuxt Boilerplate",
    },
  ],
  css: ["@/shared/presentation/styles/global.scss", "vuetify/styles/main.sass"],
  devtools: { enabled: true },
  build: {
    extend() {},
    transpile: ["vuetify", "@vuepic/vue-datepicker"],
  },
  server: {
    host: "0.0.0.0",
  },
  app: {
    baseURL: URL_PATH,
    buildAssetsURL: URL_PATH,
  },
  router: {
    base: URL_PATH,
    publicPath: URL_PATH,
  },
  hooks: {
    "pages:extend": routes,
  },
  modules: [
    async (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) =>
        // @ts-ignore
        config.plugins.push(vuetify()),
      );
    },
    "@pinia/nuxt",
    "@nuxtjs/eslint-module",
    () => {
      if (process.env.NODE_ENV === "production") {
        return "";
      }

      return "@nuxtjs/eslint-module";
    },
    () => {
      if (process.env.NODE_ENV === "production") {
        return "";
      }

      return "@nuxt/test-utils/module";
    },
  ],
  vite: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  },
  eslint: {
    lintOnStart: false,
    emitError: false,
    emitWarning: false,
  },
});
