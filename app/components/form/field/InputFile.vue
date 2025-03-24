<script setup lang="ts">
defineProps({
  accept: {
    type: String,
    default: '*',
  },
})
</script>

<template>
  <FormFieldInput
    type="file"
    :accept="accept"
    input-class="cursor-pointer appearance-none overflow-hidden file:-my-1.5 file:-ml-3 file:mr-3 file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-r-[1px] file:border-solid file:border-gray-300 file:bg-gray-100 file:px-3 file:py-1.5 file:text-gray-600"
  />
</template>
