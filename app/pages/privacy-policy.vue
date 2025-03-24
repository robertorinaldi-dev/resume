<script setup lang="ts">
import type { PageCollections } from '@nuxt/content'

const { locale } = useI18n()

const path = 'privacy-policy'
const collection = computed(() => (`content_${locale.value}`) as keyof PageCollections)

const { data: page } = await useAsyncData(`${path}___${locale.value}`, () => {
  return queryCollection(collection.value).path(`/${path}`).first()
})
</script>

<template>
  <div v-if="page">
    <MetaContentHead :content="page" />

    <h1>{{ page.title }}</h1>

    <ContentRenderer :value="page" >
      <template #empty>
        &nbsp;
      </template>
    </ContentRenderer>
  </div>
</template>
