import { defineNuxtPlugin } from "#app";
import Aura from "@primeuix/themes/aura";

export default defineNuxtPlugin((nuxtApp) => {
  const primevue = nuxtApp.vueApp._context.provides.config;
  if (primevue?.theme) {
    primevue.theme.preset = Aura;
  }
});
