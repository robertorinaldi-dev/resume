// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from '@tailwindcss/vite'
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  app: {
    layoutTransition: { name: 'blur', mode: 'in-out' },
    pageTransition: { name: 'blur', mode: 'in-out' },

    head: {
      link: [
        // https://realfavicongenerator.net/
        // {
        //   rel: 'icon',
        //   type: 'image/png',
        //   sizes: '96x96',
        //   href: '/favicons/favicon-96x96.png',
        // },
        // {
        //   rel: 'icon',
        //   type: 'image/svg+xml',
        //   href: '/favicons/favicon.svg',
        // },
        // {
        //   rel: 'shortcut icon',
        //   href: '/favicons/favicon.ico',
        // },
        // {
        //   rel: 'apple-touch-icon',
        //   sizes: '180x180',
        //   href: '/favicons/apple-touch-icon.png',
        // },
        // { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon.png' },
        // { rel: 'manifest', href: '/favicons/site.webmanifest' },
        // { rel: 'stylesheet', href: 'https://use.typekit.net/uvk5bzg.css' },
      ],

      meta: [
        // {
        //   name: 'apple-mobile-web-app-title',
        //   content: 'Nuxt',
        // },
      ],

      script: [
        // { src: '//cdn.cookie-script.com/s/70c321ad12bb61edf5914c236796c4d5.js' },
        // { src: `https://maps.googleapis.com/maps/api/js?key=${process.env.NUXT_PUBLIC_GOOGLE_MAPS_KEY}&libraries=places` },
      ],
    },
  },

  css: ['~/assets/css/tailwind.css'],

  devtools: {
    enabled: false,
  },

  runtimeConfig: {
    apiSecret: '',

    public: {
      siteUrl: '',

      apiBase: '',

      scripts: {
        googleTagManager: {
          // .env
          // NUXT_PUBLIC_SCRIPTS_GOOGLE_TAG_MANAGER_ID=<your-id>
          id: '',
        },
      },

      googleMapsKey: '',

    },
  },

  modules: [
    '@nuxtjs/sitemap',
    '@nuxt/content', // https://content.nuxtjs.org/
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxtjs/google-fonts', // https://google-fonts.nuxtjs.org/
    '@nuxtjs/i18n', // https://v8.i18n.nuxtjs.org/
  ],

  content: {
    renderer: {
      anchorLinks: { h2: true, h3: true, h4: true },
    },
  },

  image: {
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 960,
      'lg': 1280,
      'xl': 1600,
      '2xl': 1920,
    },
  },

  scripts: {
    registry: {
      // googleTagManager: true,
    },
  },

  googleFonts: {
    display: 'block',
    download: false,
    families: {
      'Open+Sans': [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },

  /*
   ** nuxt-i18n configuration
   ** See https://i18n.nuxtjs.org/options-reference.html
   */
  i18n: {
    locales: [
      {
        code: 'it',
        name: 'Italiano',
        language: 'it-IT',
        file: 'it-IT.json',
      },
      {
        code: 'en',
        name: 'English',
        language: 'en-GB',
        file: 'en-GB.json',
      },
    ],
    defaultLocale: 'it',
    strategy: 'prefix_and_default',
    lazy: true,
    detectBrowserLanguage: {
      useCookie: false,
    },
    compilation: { strictMessage: false, escapeHtml: false },
  },

  vite: {

    plugins: [
      tailwindcss(),
      svgLoader({
        svgoConfig: {
          multipass: true,
          plugins: [
            // https://github.com/svg/svgo#built-in-plugins
            {
              name: 'preset-default',
              params: {
                overrides: {
                  removeViewBox: false,
                },
              },
            },
            'removeDimensions',
          ],
        },
      }),
    ],
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/en'],
      failOnError: false,
    },
  },

  future: {
    compatibilityVersion: 4,
    typescriptBundlerResolution: true,
  },

  experimental: {
    inlineRouteRules: true,
  },

  compatibilityDate: '2025-03-24',
})
