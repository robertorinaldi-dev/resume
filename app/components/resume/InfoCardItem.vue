<script setup lang="ts">
import type { InfoItem } from '~/models'

defineProps({
  data: {
    type: Object as PropType<InfoItem>,
    required: true,
  },
})
</script>

<template>
  <div class="flex items-center justify-between">
    <div class="flex gap-3">
      <MediaHeroIcon :icon="data.icon" />
      <div class="font-medium">
        <div class="text-sm text-secondary-foreground">
          {{ data.value }}
        </div>
        <div class="text-xs text-tertiary-foreground">
          {{ data.name }}
        </div>
      </div>
    </div>
    <slot />
  </div>
</template>
