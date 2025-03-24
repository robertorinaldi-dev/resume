<script setup lang="ts">
import { site } from '@/utils/data'

const props = defineProps({
  title: String,
  metaTitle: String,
  metaDescription: String,
  type: {
    type: String,
    default: 'article',
  },
  image: String, // Absolute URL
  twitterCard: String,
})

const metaTitle = computed(() =>
  props.metaTitle || props.title ? `${props.title} - ${site.name}` : null,
)

const runtimeConfig = useRuntimeConfig()

const route = useRoute()

const pageAbsoluteUrl = computed(
  () => `${runtimeConfig.public.siteUrl || site.url}${route.fullPath}`,
)
</script>

<template>
  <Head>
    <Title>{{ title }}</Title>
    <Meta
      v-if="metaDescription"
      name="description"
      :content="metaDescription"
    />

    <!-- Open Graph -->
    <!-- <Meta property="fb:app_id" :content="site.facebookAppId" /> -->
    <!-- <Meta property="og:site_name" :content="site.name" /> -->
    <Meta
      v-if="metaTitle"
      property="og:title"
      :content="metaTitle"
    />
    <Meta
      v-if="metaDescription"
      property="og:description"
      :content="metaDescription"
    />
    <Meta
      property="og:type"
      :content="type"
    />
    <Meta
      property="og:url"
      :content="pageAbsoluteUrl"
    />
    <Meta
      v-if="image"
      property="og:image"
      :content="image"
    />

    <!-- Twitter -->
    <!-- <Meta name="twitter:site" :content="site.twitterSite" /> -->
    <Meta
      v-if="twitterCard"
      name="twitter:card"
      :content="twitterCard"
    />
    <Meta
      v-if="metaTitle"
      name="twitter:title"
      :content="metaTitle"
    />
    <Meta
      v-if="metaDescription"
      name="twitter:description"
      :content="metaDescription"
    />
    <Meta
      v-if="image"
      name="twitter:image"
      :content="image"
    />
    <Meta
      v-if="metaTitle"
      name="twitter:image:alt"
      :content="metaTitle"
    />
  </Head>
</template>
