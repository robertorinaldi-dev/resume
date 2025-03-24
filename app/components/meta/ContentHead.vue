<script setup lang="ts">
import type { PageCollections } from '@nuxt/content'
import { site } from '@/utils/data'

const props = defineProps<{
  content: PageCollections[keyof PageCollections]
  twitterCard?: string
}>()

const metaTitle = computed(() =>
  props.content?.title ? `${props.content.title} - ${site.name}` : undefined,
)

const metaDescription = computed(
  () => props.content.seo?.description || props.content?.description,
)

const imageUrl = props.content.seo?.image

const runtimeConfig = useRuntimeConfig()

const imageAbsoluteUrl = computed(() =>
  imageUrl
    ? imageUrl.startsWith('http')
      ? imageUrl
      : `${runtimeConfig.public.siteUrl || site.url.replace(/\/+$/, '')}/${imageUrl}`
    : '',
)
</script>

<template>
  <MetaHead
    :title="content?.title" :meta-title="metaTitle" :meta-description="metaDescription" type="article"
    :image="imageAbsoluteUrl" :twitter-card="twitterCard"
  />
</template>
