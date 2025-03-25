<script setup lang="ts">
import type { Language } from '~/models'

defineProps({
  data: {
    type: Object as PropType<Language>,
    required: true,
  },
})
</script>

<template>
  <div
    class="flex min-w-[180px] cursor-pointer items-center gap-2 rounded-lg border border-gray-100 px-4 py-2 hover:bg-gray-100 dark:border-night-700 dark:hover:bg-night-700"
  >
    <img
      :src="data.flag"
      alt="Avatar"
      class="h-8 w-8 rounded-full border-2 border-white shadow-sm dark:border-night-700"
    >
    <div class="font-medium">
      <div class="text-xs text-gray-600 dark:text-night-200">
        {{ data.name }}
      </div>
      <div class="text-xs text-gray-400 dark:text-night-400">
        {{ data.level }}
      </div>
    </div>
  </div>
</template>
