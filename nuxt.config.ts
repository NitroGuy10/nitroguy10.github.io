// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
      shim: false,
      typeCheck: "build"
  },

  modules: [
      "@nuxtjs/tailwindcss"
  ],

  app: {
      head: {
          htmlAttrs: { lang: "en" },
          title: "NitroGuy",
          meta: [
              { name: "description", content: "NitroGuy's Website" },
              { name: "author", content: "NitroGuy / NitroGuy10 / The Sass" }
          ],
          link: [
              { rel: "apple-touch-icon", sizes: "180x180", href: "/favicon/apple.png" },
              { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon/favicon-32x32.png" },
              { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon/favicon-16x16.png" },
              { rel: "manifest", href: "/favicon/site.webmanifest" }
          ]
      }
  },

  nitro: {
      output: {
          publicDir: "@/docs"
      }
  },

  compatibilityDate: "2024-08-08"
});