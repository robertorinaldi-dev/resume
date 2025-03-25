<script setup lang="ts">
import type { InfoItem } from '~/models'

defineProps({
  data: {
    type: Array as PropType<InfoItem[]>,
    required: true,
  },
})
</script>

<template>
  <ResumeCard>
    <h2 class="mb-4 text-lg font-semibold dark:text-night-50">
      Dati personali
    </h2>
    <div class="space-y-4">
      <ResumeInfoCardItem v-for="(item, index) in data" :key="index" :data="item" />
    </div>
  </ResumeCard>
</template>
