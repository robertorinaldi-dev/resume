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
    <h2 class="mb-4 text-lg font-semibold text-foreground">
      Competenze
    </h2>
    <div class="gap-2 flex flex-wrap">
      <ResumeTag
        v-for="(value, index) in data"
        :key="index"
      >
        {{ value }}
      </ResumeTag>
    </div>
  </ResumeCard>
</template>
