import colors from "vuetify/es5/util/colors";

export default {
    // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
    ssr: false,

    // Target (https://go.nuxtjs.dev/config-target)
    target: "static",

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        titleTemplate: "%s - Nuxt_i18n",
        title: "Nuxt_i18n",
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { hid: "description", name: "description", content: "" }
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        "@/assets/font-awesome/css/all.css",
        "@/assets/font-awesome/css/brands.css",
        "@/assets/font-awesome/css/fontawesome.css",
        "@/assets/css/main.css"

    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [],

    script: [{
            src: "jquery.min.js"
        },
        {
            src: "main.js"
        },
        {
            src: "skel.min.js"
        },
        {
            src: "util.js"
        }
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/vuetify
        "@nuxtjs/vuetify"
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: ["nuxt-i18n"],

    i18n: {
        locales: ["en", "nl"],
        defaultLocale: "en",
        strategy: "prefix",
        vueI18n: {
            fallbackLocale: "nl",
            messages: {
                en: {
                    languages: {
                        en: "English",
                        nl: "Dutch"
                    },
                    header: {
                        home: "Home",
                        generic: "Generic",
                        elements: "Elements"
                    },
                    banner: {
                        welcome: "Welcome on Projection",
                        get_started: "Get started"
                    },
                    three: {
                        learn_more: "Learn More"
                    },
                    footer: {
                        get_in_touch: "Get in touch",
                        name: "Name",
                        email: "Email",
                        message: "Message",
                        send_message: "Send message"
                    }
                },
                nl: {
                    languages: {
                        en: "Engels",
                        nl: "Nederlands"
                    },
                    header: {
                        home: "Thuis",
                        generic: "Generiek",
                        elements: "Elementen"
                    },
                    banner: {
                        welcome: "Welkom op Projection",
                        get_started: "Begin"
                    },
                    three: {
                        learn_more: "Leer meer"
                    },
                    footer: {
                        get_in_touch: "Zoek contact op",
                        name: "Naam",
                        email: "Email",
                        message: "Bericht",
                        send_message: "Verstuur bericht"
                    }
                }
            }
        }
    },

    // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
    vuetify: {
        customVariables: ["~/assets/variables.scss"],
        theme: {
            dark: true,
            themes: {
                dark: {
                    primary: colors.blue.darken2,
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3
                }
            }
        }
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {}
};