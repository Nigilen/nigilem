import { createClient } from '@sanity/client'

export default defineNuxtPlugin(() => {
  // const config = useRuntimeConfig()
  const client = createClient({
    // projectId: config.public.sanityProjectId,
    // dataset: config.public.sanityDataset,
    projectId: "eucagctt",
    dataset: "production",
    apiVersion: "2025-10-22",
    useCdn: false
  })
  return { provide: { sanity: client } }
})
