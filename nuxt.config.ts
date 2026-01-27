export default defineNuxtConfig({
  app: {
    head: {
      title: "MyAnimeList Yearly Anime Recap",
      meta: [
        {
          name: "description",
          content:
            "Your personalized MyAnimeList recap — favorite genres, top anime, and highlights from your year.",
        },
      ],
    },
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon", "@nuxt/image"],
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
  image: {
    domains: ["cdn.myanimelist.net"],
  },
});
