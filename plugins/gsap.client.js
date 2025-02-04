import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    gsap.registerPlugin(ScrollToPlugin);
    nuxtApp.provide("gsap", gsap);
  }
});
