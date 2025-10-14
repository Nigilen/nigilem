import { defineContentConfig, defineCollection, z, property } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md',
      schema: z.object({
        hero: property(z.object({})).inherit('app/components/AppHero.vue')
      })
    })
  }
})
