import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  components: {
    dirs: ["~/components/icons", "~/components"],
  },
  css: ["~/assets/css/index.css"],
  meta: {
    title: "Tang Xuyuan"
  },
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js')
    },
  },
});
