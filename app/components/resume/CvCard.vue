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
  <ResumeCard>
    <h2 class="dark:text-dark-50 mb-4 text-lg font-semibold">
      Documenti
    </h2>
    <NuxtLinkLocale v-if="data" class="flex items-center justify-between" :to="data.url" target="_blank">
      <div class="flex gap-3">
        <MediaHeroIcon :icon="data.icon" />
        <div class="font-medium">
          <div class="dark:text-dark-foreground text-sm text-light-foreground">
            {{ data.value }}
          </div>
          <div class="dark:text-dark-tertiary-foreground text-xs text-light-tertiary-foreground">
            {{ data.name }}
          </div>
        </div>
      </div>
      <MediaHeroIcon icon="ArrowDownTrayIcon" is-link />
    </NuxtLinkLocale>
  </ResumeCard>
</template>
