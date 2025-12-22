// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/scss/_variables.scss', '~/assets/scss/main.scss'],
  compatibilityDate: '2025-07-15',
  ssr: true,

  runtimeConfig: {
    public: {
      API_URL: process.env.API_URL
    }
  },

  app: {
    head: {
      title: 'Nigilen',
      meta: [
        { name: 'description', content: 'My amazing site' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ]
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/blog', '/portfolio', '/services', '/notes']
    }
  },

  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxt/eslint',
  ],

  fonts: {
    families: [
      {
        name: 'JetBrainsMono',
        provider: 'local',
        styles: ['normal', 'italic'],
        weights: [400, 500, 600, 700],
        subsets: ['latin', 'cyrillic']
      }
    ]
  },

  icon: {
    customCollections: [
      {
        prefix: 'my-icon',
        dir: './app/assets/my-icons',
      }
    ]
  },

  image: {
    format: ['avif', 'webp'], 
    quality: 80,
    domains: ['cms.nigilen.site'],
    provider: 'ipx',
  },

});