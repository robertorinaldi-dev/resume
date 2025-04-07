<script setup lang="ts">
import type { Profile } from '~/models'

defineProps({
  data: {
    type: Array as PropType<string[]>,
    required: true,
  },
})
</script>

<template>
  <ResumeCard>
    <h2 class="mb-4 text-lg font-semibold text-light-foreground dark:text-dark-foreground">
      Competenze
    </h2>
    <div class="gap-2 flex flex-wrap">
      <span
        v-for="(value, index) in data"
        :key="index"
        class="inline-flex rounded-lg px-2 py-1 text-xs font-medium bg-primary/10 text-primary"
      >
        {{ value }}
      </span>
    </div>
  </ResumeCard>
</template>
