<script setup lang="ts">
import type { Education } from '~/models'

const props = defineProps({
  data: {
    type: Array as PropType<Education[]>,
    required: true,
  },
})

const total = computed(() => {
  return props.data.length
})
</script>

<template>
  <ResumeCard>
    <NuxtLinkLocale id="education" :to="{ name: 'education', hash: '#education' }">
      <h2 class="mb-5 text-lg font-semibold" id="education">Formazione</h2>
    </NuxtLinkLocale>
    <ResumeEducationCardItem v-for="(item, index) in data" :key="index" :data="item" :separator="total > index + 1" />
  </ResumeCard>
</template>
