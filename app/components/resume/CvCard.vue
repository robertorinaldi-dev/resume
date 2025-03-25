<script setup lang="ts">
import type { DataResumeCollectionItem } from '@nuxt/content'

defineProps({
  data: {
    type: Object as PropType<DataResumeCollectionItem['cv']>,
    required: true,
  },
})
</script>

<template>
  <ResumeCard>
    <h2 class="dark:text-night-50 mb-4 text-lg font-semibold">
      Documenti
    </h2>
    <NuxtLinkLocale v-if="data" class="flex items-center justify-between" :to="data.url" target="_blank">
      <div class="flex gap-3">
        <div
          class="dark:bg-night-700 dark:text-night-300 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-400"
        >
          <MediaHeroIcon :icon="data.icon" class="h-5 w-5 stroke-1" />
        </div>
        <div class="font-medium">
          <div class="dark:text-night-100 text-sm text-gray-900">
            {{ data.value }}
          </div>
          <div class="dark:text-night-400 text-xs text-gray-400">
            {{ data.name }}
          </div>
        </div>
      </div>
      <div class="bg-primary-500/20 text-primary-500 rounded-full px-2.5 py-2.5">
        <MediaHeroIcon icon="ArrowDownTrayIcon" class="stroke- h-5 w-5 hover:animate-pulse" />
      </div>
    </NuxtLinkLocale>
  </ResumeCard>
</template>
