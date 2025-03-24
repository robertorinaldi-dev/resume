import type { ZodObject, ZodRawShape } from 'zod'
import { z as z$2 } from 'zod'
import { type Collection, defineCollection, defineContentConfig, z } from '@nuxt/content'

// https://zod.dev/README?id=recursive-types
const schema: ZodObject<ZodRawShape> = z.object({
  name: z.string(),
  path: z.string(),
  title: z.string(),
  description: z.string(),
  seo: z
    .intersection(
      z.object({
        title: z.string().optional(),
        description: z.string().optional(),
        meta: z.array(z.record(z.string(), z.any())).optional(),
        link: z.array(z.record(z.string(), z.any())).optional(),
        image: z.string().optional(),
      }),
      z.record(z.string(), z.any()),
    )
    .optional()
    .default({}),
  body: z.object({
    type: z.string(),
    children: z.any(),
    toc: z.any(),
  }),
  menu: z.string(),
  navigation: z
    .union([
      z.boolean(),
      z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string(),
        file: z.string().optional(),
        to: z.string().optional(),
      }),
    ])
    .default(true),
  children: z.any().optional(),
})

export default defineContentConfig({
  collections: {
    content_it: defineCollection({
      type: 'page',
      source: {
        include: 'it/**',
        prefix: '',
      },
      schema,
    }),
    content_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/**',
        prefix: '',
      },
      schema,
    }),
  },
})
