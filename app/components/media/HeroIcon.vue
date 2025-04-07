<script setup lang="ts">
import * as outline from '@heroicons/vue/24/outline'
import * as solid from '@heroicons/vue/24/solid'
import { computed } from 'vue'

const props = defineProps({ icon: String, isSolid: Boolean, isLink: Boolean })

const icon = computed(() => {
  if (props.isSolid)
    return solid[props.icon as keyof typeof solid]
  return outline[props.icon as keyof typeof outline]
})
</script>

<template>
  <div
    class="inline-flex flex-shrink-0 items-center gap-1 rounded-xl dark:bg-dark-700 dark:text-dark-300  text-gray-500 bg-gray-100 px-2 py-2 text-xs font-medium"
    :class="{
      '': !isLink,
      'hover:bg-gray-500 hover:text-white border border-gray-500 dark:hover:bg-primary/20 dark:hover:text-primary transition duration-300 cursor-pointer':
        isLink,
    }"
  >
    <component :is="icon" class="size-5" />
    <slot />
  </div>
</template>
