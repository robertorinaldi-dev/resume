<script setup lang="ts">
defineEmits(['click'])
</script>

<template>
  <div
    class="focus:outline-hidden group flex size-6 items-center drop-shadow-sm"
    @click="$emit('click')"
  >
    <div class="relative h-[2px] w-full">
      <div
        class="bg-foreground  group-data-active:top-0 group-data-active:-rotate-45 absolute inset-x-0 -top-[8px] h-[2px] w-full transition-all duration-500 ease-in-out"
      />
      <div
        class="bg-foreground  group-data-active:w-0 group-data-active:opacity-0 absolute left-0 h-[2px] w-full transition-all duration-500 ease-in-out"
      />
      <div
        class="bg-foreground  group-data-active:bottom-0 group-data-active:rotate-45 absolute inset-x-0 -bottom-[8px] h-[2px] w-full transition-all duration-500 ease-in-out"
      />
    </div>
  </div>
</template>
