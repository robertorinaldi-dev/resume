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
  <div class="flex cursor-pointer items-center gap-3">
    <div class="flex size-7 shrink-0 items-center overflow-hidden rounded-lg">
      <img :src="data.flag" alt="Avatar" class="size-8 object-cover object-center" />
    </div>
    <div class="font-medium">
      <div class="text-foreground text-sm">
        {{ data.name }}
      </div>
      <div class="text-tertiary-foreground text-xs">
        {{ data.level }}
      </div>
    </div>
  </div>
</template>
