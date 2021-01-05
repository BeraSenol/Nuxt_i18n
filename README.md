# Nuxt_i18n

## Build Setup

More info: [Nuxt.js docs](https://nuxtjs.org).

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate

# installion i18n
$ npm install nuxt-i18n
```

## i18n Configuration

More info: [Nuxt.js/i18n Setup](https://i18n.nuxtjs.org/setup)

```bash
# add nuxt-i18n and i18n to the modules section of nuxt.config.js
{
  modules: [
    'nuxt-i18n',
  ],
  i18n: {}
}

# i18n locales config
i18n: {
    locales: ["en", "nl"]
}

# i18n config options:
# "locales" sets all available locales
i18n: {
    locales: ["en", "nl"]
}

# "defaultLocale" sets the default locale
i18n: {
    DefaultLocale: "en"
}

# "strategy" sets the url strategy (prefix makes the url always contain the current locale like "localhost:3000/en")
i18n: {
    strategy: "prefix"
}
```

# i18n Usage

More info: [Nuxt.js/i18n Basic Usage](https://i18n.nuxtjs.org/basic-usage)

```bash
# example (nuxt.config.js):
i18n: {
    locales: ['en', 'nl'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'nl',
      messages: {
        en: {
          welcome: 'Welcome'
        },
        nl: {
          welcome: 'Welkom'
        }
      }
    }
  }

# example (index.vue)
<h1>{{ $t("welcome") }}</h1>

# Nuxt-link locale routing
<nuxt-link :to="localePath('index')">Home</nuxt-link>
//Or
<nuxt-link :to="localePath('/')">Home</nuxt-link>

# Nuxt-link locale switching
<nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
<nuxt-link :to="switchLocalePath('nl')">Dutch</nuxt-link>
```
