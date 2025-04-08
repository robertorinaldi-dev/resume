<script setup lang="ts">
const props = defineProps({
  maxiRounded: String as PropType<'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'>,
})
</script>

<template>
  <div class="relative">
    <div
      class="bg-background ring-tertiary-foreground relative flex h-full flex-col shadow-lg rounded-lg p-5 ring-1"
      :class="{
        'lg:rounded-tl-[2rem]': maxiRounded === 'topLeft',
        'lg:rounded-tr-[2rem]': maxiRounded === 'topRight',
      }"
    >
      <slot />
    </div>
  </div>
</template>
