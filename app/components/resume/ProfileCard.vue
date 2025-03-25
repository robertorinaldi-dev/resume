<script setup lang="ts">
import type { DataResumeCollectionItem } from '@nuxt/content'

defineProps({
  data: {
    type: Object as PropType<DataResumeCollectionItem['profile']>,
    required: true,
  },
})
</script>

<template>
  <ResumeCard>
    <div class="flex items-start justify-between">
      <div class="flex items-start gap-3">
        <img :src="data.avatar" alt="Avatar" class="size-16 rounded-full">
        <div>
          <div class="dark:text-dark-50 text-lg font-bold text-gray-900">
            {{ data.name }}
          </div>
          <div class="dark:text-dark-200 text-xs text-gray-400">
            {{ data.job }}
          </div>
          <div class="mt-2 inline-flex flex-wrap gap-1">
            <a
              v-for="(social, index) of data.socialNetwork"
              :key="index"
              :href="social.url"
              target="_blank"
              class="cursor-pointer rounded-lg border border-gray-100 px-2 py-0.5 text-xs font-medium text-gray-400 hover:bg-primary-500/20 hover:text-primary-500 dark:border-dark-600 dark:hover:bg-primary-500/20"
            >
              {{ social.name }}
            </a>
          </div>
        </div>
      </div>
      <!-- More Options  -->
      <!-- <SettingsPopover /> -->
      <!-- End status badge -->
    </div>
  </ResumeCard>
</template>
