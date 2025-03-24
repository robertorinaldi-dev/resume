<script setup lang="ts">
defineProps({
  to: {
    type: String,
    default: '/',
  },
})

defineEmits(['click'])
</script>

<template>
  <NuxtLinkLocale
    class="btn"
    :to="to"
    @click="$emit('click')"
  >
    <slot />
  </NuxtLinkLocale>
</template>
