<script setup lang="ts">
import { PhoneIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <FormFieldInput
    trim
    type="tel"
  >
    <template #leading>
      <PhoneIcon
        class="size-5 text-gray-400"
        aria-hidden="true"
      />
    </template>
  </FormFieldInput>
</template>
