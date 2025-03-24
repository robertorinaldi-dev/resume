<script setup lang="ts">
import type { NavigationItem } from '~/types/navigation'

defineProps({
  value: {
    type: Object as PropType<NavigationItem>,
  },
  target: {
    type: String,
  },
  asButton: {
    type: Boolean,
  },
})
</script>

<template>
  <div class="cursor-pointer items-center justify-center whitespace-nowrap text-center transition duration-200 ease-in-out">
    <NuxtLinkLocale
      v-if="!asButton"
      class="flex w-full p-2 uppercase hover:no-underline desktop:h-full desktop:w-auto"
      :to="value?.name"
      :target="target ?? (typeof value?.navigation === 'object' && value?.navigation?.file ? '_blank' : undefined)"
    >
      <slot name="leading" />
      <slot>{{ value?.title }}</slot>
      <slot name="trailing" />
    </NuxtLinkLocale>
    <button
      v-else
      class="flex w-full p-2 uppercase hover:no-underline desktop:h-full desktop:w-auto"
    >
      <slot name="leading" />
      <slot>{{ value?.title }}</slot>
      <slot name="trailing" />
    </button>
  </div>
</template>
