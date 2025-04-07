<script setup lang="ts">
import type { Education } from '~/models'

defineProps({
  data: {
    type: Object as PropType<Education>,
    required: true,
  },
  separator: Boolean,
})
</script>

<template>
  <div class="mb-5 flex items-start">
    <img
      :src="data.collegeLogo"
      alt="Avatar"
      class="size-14 object-contain shrink-0"
    >
    <div class="ml-3 w-full space-y-5">
      <div class="items-start justify-between sm:flex">
        <div class="mb-1 space-y-1.5">
          <div class="dark:text-night-50 font-medium">
            {{ data.college }}
          </div>
          <div class="flex space-x-5">
            <div class="dark:text-night-400 flex items-start gap-1 text-sm font-medium text-gray-400">
              <!-- <HeroIcon :icon="'AcademicCapIcon'" class="h-4 w-4 shrink-0" /> -->
              <span class="max-w-sm">{{ data.course }}</span>
            </div>
          </div>
        </div>
        <div class="flex shrink-0 items-start justify-between space-y-1 sm:block sm:text-right">
          <div
            v-if="data.degree"
            class="bg-primary/20 text-primary order-last inline-flex items-center rounded-lg px-2 py-1 text-xs font-medium"
          >
            {{ data.degree }}
          </div>
          <div class="dark:text-dark-400 flex items-center justify-end gap-3 text-sm font-medium text-gray-500">
            <MediaHeroIcon icon="CalendarIcon" />
            <span>{{ data.start }} - {{ data.end }}</span>
          </div>
        </div>
      </div>
      <div v-if="separator" class="dark:border-night-600 border-b border-dashed border-gray-200" />
    </div>
  </div>
</template>
