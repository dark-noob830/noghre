// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  runtimeConfig:{
    public:{
      apiBase:'http://127.0.0.1:8000'
    }
  }
});
