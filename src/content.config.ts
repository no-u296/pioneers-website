import { defineCollection, z } from 'astro:content';

const featureCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.enum(['geometry', 'layers', 'publication'])
  })
});

export const collections = {
  features: featureCollection
};
