<script setup lang="ts">
import type { InfoItem } from '~/models'

defineProps({
  data: {
    type: Object as PropType<InfoItem>,
    required: true,
  },
})
</script>

<template>
  <div class="flex items-center justify-between">
    <div class="flex gap-3">
      <div
        class="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-400 dark:bg-night-700 dark:text-night-300"
      >
        <MediaHeroIcon :icon="data.icon" class="h-5 w-5 stroke-1" />
      </div>
      <div class="font-medium">
        <div class="text-sm text-gray-900 dark:text-night-100">
          {{ data.value }}
        </div>
        <div class="text-xs text-gray-400 dark:text-night-400">
          {{ data.name }}
        </div>
      </div>
    </div>
    <slot />
  </div>
</template>
