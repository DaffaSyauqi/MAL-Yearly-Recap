// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    malClientSecret: process.env.MAL_CLIENT_SECRET,
    public: {
      malClientId: process.env.MAL_CLIENT_ID,
      malRedirectUri: process.env.MAL_REDIRECT_URI,
    },
  },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    config: {},
    viewer: true,
    exposeConfig: false,
  },
});
