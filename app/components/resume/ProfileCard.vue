<script setup lang="ts">
import type { Profile } from '~/models'

defineProps({
  data: {
    type: Object as PropType<Profile>,
    required: true,
  },
})
</script>

<template>
  <ResumeCard>
    <div class="flex size-full items-start gap-3 @container">
      <img :src="data.avatar" alt="Avatar" class="size-14 rounded-full sepia:sepia-50" />
      <div class="flex h-full flex-wrap flex-1 items-center justify-between gap-3">
        <div class="flex flex-col justify-start">
          <div class="text-foreground text-lg font-bold">
            {{ data.name }}
          </div>
          <div class="text-secondary-foreground text-xs">
            {{ data.job }}
          </div>
        </div>
        <ColorModePicker />
      </div>
    </div>
  </ResumeCard>
</template>
