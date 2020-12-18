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
[Nuxt.js/i18n Setup](https://i18n.nuxtjs.org/setup)
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

# "defaultLocale sets the default locale"
i18n: {
    DefaultLocale: "en"
}

# "strategy" sets the url strategy, more info:
i18n: {
    strategy: "prefix"
}
```
