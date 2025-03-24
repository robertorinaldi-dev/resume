<script setup lang="ts">
import type { PageCollections } from '@nuxt/content'

const config = useRuntimeConfig()
const { locale, t } = useI18n()

const collection = computed(() => `content_${locale.value}` as keyof PageCollections)

const { data: page } = await useAsyncData(`index___${locale.value}`, () => {
  return queryCollection(collection.value).path('/').first()
})

const pages = [
  { title: t('Example 1'), to: {
    name: 'index',
  } },
  { title: 'Esempio 2', to: {
    name: 'contacts',
    // params: {
    //   slug: 'test',
    // },
  } },
  { title: page.value?.title, current: true },
]
</script>

<template>
  <div v-if="page">
    <MetaContentHead :content="page" />

    <Breadcrumbs :pages="pages" />

    <h1>{{ page.title }}</h1>

    <ContentRenderer :value="page">
      <template #empty>
        &nbsp;
      </template>
    </ContentRenderer>

    
  </div>
</template>

<style scoped></style>
