<script setup lang="ts">
import type { Experience } from '~/models'

defineProps({
  data: {
    type: Object as PropType<Experience>,
    required: true,
  },
  separator: Boolean,
})
</script>

<template>
  <div class="mb-5 flex items-start">
    <img
      :src="data.companyLogo"
      alt="Avatar"
      class="size-14 object-contain shrink-0"
    >
    <div class="ml-3 w-full space-y-5">
      <div class="justify-between sm:flex gap-8">
        <div class="space-y-2">
          <div class="font-medium dark:text-dark-50">
            {{ data.job }}
          </div>
          <div class="space-y-2">
            <div class="flex items-center gap-3 text-sm font-medium text-gray-500 dark:text-dark-400">
              <MediaHeroIcon icon="BriefcaseIcon" />
              <span>{{ data.company }}</span>
            </div>
            <div class="flex items-center gap-3 text-sm font-medium text-gray-500 dark:text-dark-400">
              <MediaHeroIcon icon="MapPinIcon" />
              <span>{{ data.location }}</span>
            </div>
          </div>
        </div>
        <div class="flex items-start justify-between space-y-1 sm:block sm:text-right shrink-0">
          <div
            class="order-last inline-flex items-center rounded-lg bg-primary/20 px-2 py-1 text-xs font-medium text-primary"
          >
            {{ data.workType }}
          </div>
          <div class="flex items-center gap-3 text-sm font-medium text-gray-500 dark:text-dark-400">
            <MediaHeroIcon icon="CalendarIcon" />
            <span>{{ data.start }} - {{ data.end }}</span>
          </div>
        </div>
      </div>
      <p class="text-xs text-gray-500 dark:text-dark-400" v-html="data.description" />
      <ul class="prose dark:prose-dark prose-li:list-disc">
        <li v-for="item in data.workList" :key="item" class="text-sm text-gray-600 dark:text-dark-300">
          {{ item }}
        </li>
      </ul>
      <div v-if="separator" class="border-b border-dashed border-gray-200 dark:border-dark-600" />
    </div>
  </div>
</template>
