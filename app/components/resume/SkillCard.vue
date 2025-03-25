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
    <h2 class="mb-4 text-lg font-semibold dark:text-night-50">
      Competenze
    </h2>
    <div class="-m-2 flex flex-wrap">
      <span
        v-for="(value, index) in data"
        :key="index"
        class="inline-flex rounded-lg px-2 py-1 text-xs font-medium m-1 cursor-pointer bg-emerald-500/20 text-emerald-500 hover:bg-emerald-500 hover:text-white"
      >
        {{ value }}
      </span>
    </div>
  </ResumeCard>
</template>
