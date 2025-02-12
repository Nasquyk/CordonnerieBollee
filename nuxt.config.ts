// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  
  },

  app: {
    head: {
      title: 'Cordonnerie Bollée',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/icon.png' }
      ]
    }
  },

  plugins: ["~/plugins/gsap.client.js"],
  modules: ['@nuxt/image'],
  image: {
    format: ['webp', 'avif'],
    quality: 80,
     dir: 'assets/img'
  },
})
