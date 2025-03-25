<script setup lang="ts">
import type { Experience } from '~/models'

const props = defineProps({
  data: {
    type: Array as PropType<Experience[]>,
    required: true,
  },
})

const itemsPerPage = 3;
const currentPage = ref(1);

const total = computed(() => {
  return props.data.length;
});

const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return props.data.slice(start, end);
});

function onPageChange(page: number) {
  currentPage.value = page;
}
</script>

<template>
  <ResumeCard>
    <h2 class="mb-4 text-lg font-semibold dark:text-night-50">{{ $t('experience') }}</h2>
    <ResumeExperienceCardItem
      v-for="(item, index) in paginatedItems"
      :key="index"
      :data="item"
      :separator="paginatedItems.length > index + 1" />
    <!-- Paginate  -->
    <MyPaginate :totalItems="total" :itemsPerPage="itemsPerPage" :maxVisibleButtons="3" @pagechanged="onPageChange" />
  </ResumeCard>
</template>
