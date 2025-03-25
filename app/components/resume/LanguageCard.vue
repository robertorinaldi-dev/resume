<script setup lang="ts">
import type { Language } from '~/models'

defineProps({
  data: {
    type: Array as PropType<Language[]>,
    required: true,
  },
})
</script>

<template>
  <ResumeCard>
    <h2 class="mb-4 text-lg font-semibold dark:text-night-50">
      Lingue
    </h2>
    <div class="flex flex-wrap gap-2">
      <ResumeLanguageCardItem v-for="(item, index) in data" :key="index" :data="item" />
    </div>
  </ResumeCard>
</template>
