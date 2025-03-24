<script setup lang="ts">
import EnvelopeIcon from '@heroicons/vue/24/outline/EnvelopeIcon'
</script>

<template>
  <FormFieldInput
    trim
    type="email"
  >
    <template #leading>
      <EnvelopeIcon
        class="size-5 text-gray-400"
        aria-hidden="true"
      />
    </template>
  </FormFieldInput>
</template>
