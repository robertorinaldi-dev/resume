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
    <div class="flex items-start gap-3 size-full">
      <img :src="data.avatar" alt="Avatar" class="size-14 rounded-full">
      <div class="flex flex-wrap h-full items-center flex-1">
        <div class="flex justify-start flex-col">
          <div class="dark:text-dark-foreground text-lg font-bold text-light-foreground">
            {{ data.name }}
          </div>
          <div class="dark:text-dark-secondary-foreground text-xs text-light-secondary-foreground">
            {{ data.job }}
          </div>
        </div>
        <ColorModePicker class="lg:mt-2 flex max-lg:flex-1 justify-end items-center lg:justify-start" />
      </div>
    </div>
  </ResumeCard>
</template>
