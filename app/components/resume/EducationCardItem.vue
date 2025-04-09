<script setup lang="ts">
import type { Education } from '~/models'

defineProps({
  data: {
    type: Object as PropType<Education>,
    required: true,
  },
  separator: Boolean,
})
</script>

<template>
  <div class="mb-5 flex items-start">
    <div class="bg-white flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-xl p-1">
      <img :src="data.collegeLogo" alt="Avatar" class="size-full object-contain mix-blend-multiply" />
    </div>
    <div class="ml-3 w-full space-y-5">
      <div class="items-start justify-between sm:flex">
        <div class="mb-1 space-y-1.5">
          <div class="font-medium">
            {{ data.college }}
          </div>
          <div class="text-secondary-foreground flex space-x-5">
            <div class="flex items-start gap-1 text-sm font-medium">
              <!-- <HeroIcon :icon="'AcademicCapIcon'" class="h-4 w-4 shrink-0" /> -->
              <span class="max-w-sm">{{ data.course }}</span>
            </div>
          </div>
        </div>
        <div class="flex shrink-0 items-center justify-between gap-2 sm:flex-col sm:items-end">
          <ResumeTag v-if="data.degree">
            {{ data.degree }}
          </ResumeTag>
          <div class="flex items-center justify-end gap-3 text-sm font-medium">
            <MediaHeroIcon icon="CalendarIcon" />
            <span>{{ data.start }} - {{ data.end }}</span>
          </div>
        </div>
      </div>
      <div v-if="separator" class="border-hover border-b" />
    </div>
  </div>
</template>
