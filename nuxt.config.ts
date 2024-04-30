// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/_global.scss" as *;',
        },
      },
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'ja',
        prefix: "og: http://ogp.me/ns#",
      },
    },
  },
})
