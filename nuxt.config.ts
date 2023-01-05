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
                { name: "description", content: "NitroGuy's Website" }
            ]
        }
    },
    nitro: {
        output: {
            publicDir: "../docs"
        }
    }
});
