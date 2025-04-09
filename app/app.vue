<script setup lang="ts">
import { site } from '@/utils/data'

const runtimeConfig = useRuntimeConfig()

useHead({
  title: '',
  titleTemplate: title => `${title} - ${site.name}`,
  meta: [
    {
      name: 'description',
      content: site.description || site.name,
    },
    {
      property: 'fb:app_id',
      content: site.facebookAppId,
    },
    {
      property: 'og:site_name',
      content: site.name,
    },
    {
      property: 'og:title',
      content: site.name,
    },
    {
      property: 'og:description',
      content: site.description || site.name,
    },
    {
      property: 'og:type',
      content: 'page',
    },
    {
      property: 'og:url',
      content: runtimeConfig.public.siteUrl || site.url,
    },
    {
      property: 'og:image',
      content: `${runtimeConfig.public.siteUrl || site.url}${site.image}`,
    },
    {
      name: 'twitter:site',
      content: site.twitterSite,
    },
    {
      name: 'twitter:card',
      content: 'summary',
    },
    {
      name: 'twitter:title',
      content: site.name,
    },
    {
      name: 'twitter:description',
      content: site.description || site.name,
    },
    {
      name: 'twitter:image',
      content: `${runtimeConfig.public.siteUrl || site.url}${site.image}`,
    },
    {
      name: 'twitter:image:alt',
      content: site.name,
    },
  ],
})
</script>

<template>
  <div class="min-h-screen bg-secondary-background">
      <NuxtPage />
  </div>
</template>
