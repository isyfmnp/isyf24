// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  ssr: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/css/index.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],

  middleware: ["~/middleware/routeScroll.js"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/eslint-module", "@nuxt/image-edge"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxt/image-edge"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  image: {
    presets: {
      default: {
        format: "webp",
        quality: "80",
        fit: "cover",
      },
    },
  },
});
