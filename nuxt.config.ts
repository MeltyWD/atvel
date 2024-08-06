// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

const projectRootDir = resolve(__dirname);

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  components: [
    {
      path: "src/components",
      pathPrefix: false,
    },
    {
      path: "src/content",
      pathPrefix: false,
    },
  ],
  alias: {
    "@src": resolve(projectRootDir, "src/"),
    "@img": resolve(projectRootDir, "static/img"),
    "@style": resolve(projectRootDir, "static/css"),
  },
  runtimeConfig: {
    public: {
      apiToken: process.env.STRAPI_TOKEN || "",
      baseURL: process.env.BASE_URL || "",
    },
  },
});
