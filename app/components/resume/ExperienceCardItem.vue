<script setup lang="ts">
import type { Experience } from '~/models'

defineProps({
  data: {
    type: Object as PropType<Experience>,
    required: true,
  },
  separator: Boolean,
})
</script>

<template>
  <div class="mb-5 flex items-start">
    <div class="bg-light-background flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-xl p-1">
      <img
        v-if="data.companyLogo"
        :src="data.companyLogo"
        alt="Avatar"
        class="size-full object-contain mix-blend-multiply"
      />
    </div>

    <div class="text-secondary-foreground ml-3 w-full space-y-5">
      <div class="flex flex-col gap-2">
        <div class="flex items-center justify-between gap-2">
          <div class="font-medium">
            {{ data.job }}
          </div>
          <ResumeTag>
            {{ data.workType }}
          </ResumeTag>
        </div>
        <div class="flex flex-col items-start justify-between gap-2 md:flex-row">
          <div class="flex flex-col gap-2">
            <div class="flex items-center gap-3 text-sm font-medium">
              <MediaHeroIcon icon="BriefcaseIcon" />
              <span>{{ data.company }}</span>
            </div>
            <div class="flex items-center gap-3 text-sm font-medium">
              <MediaHeroIcon icon="MapPinIcon" />
              <span>{{ data.location }}</span>
            </div>
          </div>
          <div class="flex items-center gap-3 text-sm font-medium">
            <MediaHeroIcon icon="CalendarIcon" />
            <span>{{ data.start }} - {{ data.end }}</span>
          </div>
        </div>
        <p class="my-2 text-xs" v-html="data.description" />
        <ul class="prose dark:prose-dark prose-li:list-disc">
          <li v-for="item in data.workList" :key="item" class="text-secondary-foreground text-sm" v-html="item"></li>
        </ul>
      </div>
      <div v-if="separator" class="border-hover border-b" />
    </div>
  </div>
</template>
