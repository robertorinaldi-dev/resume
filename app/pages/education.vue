<script setup lang="ts">
definePageMeta({
  layout: 'resume',
})

import type { PageCollections } from '@nuxt/content'

const { locale, t } = useI18n()

const collection = computed(() => `content_${locale.value}` as keyof PageCollections)

const { data: page } = await useAsyncData(`index___${locale.value}`, () => {
  return queryCollection(collection.value).path('/').first()
})

const { data: resume } = await useAsyncData(`data_resume___${locale.value}`, () =>
  queryCollection('data_resume').first()
)
</script>

<template>
  <div v-if="page">
    <MetaContentHead :content="page" />

    <ResumeEducationCard v-if="resume" :data="resume.education" />
  </div>
</template>
