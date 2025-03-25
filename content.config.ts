import type { ZodObject, ZodRawShape } from 'zod'
import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const resume: ZodObject<ZodRawShape> = z.object({
  profile: z.object({
    name: z.string(),
    job: z.string(),
    avatar: z.string(),
    aboutMe: z.string(),
    socialNetwork: z.array(
      z.object({
        name: z.string(),
        url: z.string(),
      }),
    ),
  }),
  cv: z.object({
    icon: z.string(),
    name: z.string(),
    value: z.string(),
    url: z.string().optional(),
  }),
  // information: InfoItem[];
  // skill: string[];
  // language: Language[];
  // experience: Experience[];
  // volunteer: Experience[];
  // education: Education[];
  // certificate: Certificate[];
  // project: Project[];
})

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
    data_resume: defineCollection({
      type: 'data',
      source: {
        include: '_data/resume/*.yml',
        prefix: '/',
      },
      schema: resume,
    }),
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
