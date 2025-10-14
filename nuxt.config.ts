// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxt/eslint'
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
  }
});