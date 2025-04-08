<script setup lang="ts">
import type { Experience } from '~/models'

const props = defineProps({
  data: {
    type: Array as PropType<Experience[]>,
    required: true,
  },
})

const total = computed(() => {
  return props.data.length;
});
</script>

<template>
  <ResumeCard>
    <h2 class="mb-4 text-lg font-semibold" id="experience">
      Esperienze lavorative
    </h2>
    
    <ResumeExperienceCardItem
      v-for="(item, index) in data"
      :key="index"
      :data="item"
      :separator="total > index + 1" />
  </ResumeCard>
</template>
