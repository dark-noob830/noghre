import bootstrap from "bootstrap/dist/js/bootstrap.bundle";

export default defineNuxtPlugin((nuxtapp) => {
  return nuxtapp.provide("bootstrap", bootstrap);
});
