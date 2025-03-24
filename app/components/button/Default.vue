<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  name: {
    type: String,
    default: '',
  },
  type: {
    type: String as PropType<'button' | 'submit' | 'reset'>,
    default: 'button',
  },
})

defineEmits(['click'])
</script>

<template>
  <button
    :type="type"
    :name="name"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>
