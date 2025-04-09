<script setup lang="ts">
defineProps({
  data: {
    type: String,
    required: true,
  },
})

const menu = [
  { name: 'experience', title: 'Esperienze lavorative', icon: 'BriefcaseIcon' },
  { name: 'education', title: 'Formazione', icon: 'AcademicCapIcon' },
]

const model = defineModel({
  type: String,
})
</script>

<template>
  <ResumeCard>
    <h2 class="text-foreground mb-4 text-lg font-semibold">Su di me</h2>
    <p class="text-secondary-foreground mb-5 text-sm" v-html="data" />
    <ul class="inline-flex gap-3">
      <li v-for="(item, index) of menu" :key="index" class="group">
        <MediaHeroIcon :icon="item.icon" is-link @click="model = item.name" :is-selected="model === item.name">
          {{ item.title }}
        </MediaHeroIcon>
      </li>
    </ul>
  </ResumeCard>
</template>
