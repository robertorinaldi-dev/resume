import type { ZodObject, ZodRawShape } from 'zod'
import type { Certificate, Education, Experience, InfoItem, Language, Profile, Project } from '~/models'
import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const resume: ZodObject<ZodRawShape> = z.object({
  profile: z.custom<Profile>(),
  cv: z.custom<InfoItem>(),
  information: z.array(z.custom<InfoItem>()),
  skill: z.array(z.string()),
  language: z.array(z.custom<Language>()),
  experience: z.array(z.custom<Experience>()),
  volunteer: z.array(z.custom<Experience>()),
  education: z.array(z.custom<Education>()),
  certificate: z.array(z.custom<Certificate>()),
  project: z.array(z.custom<Project>()),
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
