import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@primevue/nuxt-module", "@prisma/nuxt"],
  experimental: {
    componentIslands: true,
  },
  css: ["~/assets/css/main.css", "primeicons/primeicons.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  primevue: {
    usePrimeVue: true,
    autoImport: true,
  },
});
