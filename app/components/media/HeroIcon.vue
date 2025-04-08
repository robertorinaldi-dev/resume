<script setup lang="ts">
import * as outline from '@heroicons/vue/24/outline'
import * as solid from '@heroicons/vue/24/solid'
import { computed } from 'vue'

const props = defineProps({
  icon: String,
  isSolid: Boolean,
  isLink: Boolean,
  isSelected: Boolean,
})

const icon = computed(() => {
  if (props.isSolid) return solid[props.icon as keyof typeof solid]
  return outline[props.icon as keyof typeof outline]
})
</script>

<template>
  <div
    class="inline-flex flex-shrink-0 items-center gap-2 rounded-xl px-2 py-2 text-xs font-medium"
    :class="{
      'bg-tertiary-background text-secondary-foreground group-aria-[current=page]:bg-primary-light group-aria-[current=page]:dark:bg-primary-dark group-aria-[current=page]:text-primary-dark group-aria-[current=page]:dark:text-primary-light':
        !isSelected,
      'hover:text-background cursor-pointer border transition duration-100 hover:border-hover hover:bg-hover':
        isLink,
      'bg-primary-light dark:bg-primary-dark text-primary-dark dark:text-primary-light': isSelected,
    }"
  >
    <component :is="icon" class="size-5" />
    <slot />
  </div>
</template>
