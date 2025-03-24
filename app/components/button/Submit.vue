<script setup lang="ts">
defineProps({
  name: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <ButtonDefault
    type="submit"
    :name="name"
  >
    <slot />
  </ButtonDefault>
</template>
