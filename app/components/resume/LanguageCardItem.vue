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
    class="flex min-w-[180px] cursor-pointer items-center gap-2 rounded-lg border border-light-tertiary-foreground px-4 py-2 hover:bg-gray-100 dark:border-dark-tertiary-foreground dark:hover:bg-dark-700"
  >
    <img
      :src="data.flag"
      alt="Avatar"
      class="h-8 w-8 rounded-full border-2 border-light-tertiary-foreground shadow-sm dark:border-dark-tertiary-foreground"
    >
    <div class="font-medium">
      <div class="text-sm text-light-foreground dark:text-dark-foreground">
        {{ data.name }}
      </div>
      <div class="text-xs text-light-tertiary-foreground dark:text-dark-tertiary-foreground">
        {{ data.level }}
      </div>
    </div>
  </div>
</template>
