<script setup lang="ts">
import {
  Dialog,
  DialogDescription,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'

defineProps({
  title: String,
  button: {
    type: String,
    default: 'Chiudi',
  },
})

const model = defineModel<boolean>()

function close() {
  model.value = false
}
</script>

<template>
  <Dialog :open="model" class="relative z-50" @close="close">
    <!-- The backdrop, rendered as a fixed sibling to the panel container -->
    <div class="fixed inset-0 bg-black/30" aria-hidden="true" />
    <!-- Full-screen container to center the panel -->
    <div class="fixed inset-0 flex w-screen items-center justify-center p-4">
      <!-- The actual dialog panel -->
      <DialogPanel class="w-full max-w-sm rounded-sm bg-white">
        <DialogTitle>{{ title }}</DialogTitle>
        <DialogDescription>
          <slot />
        </DialogDescription>

        <button @click="close">
          {{ button }}
        </button>
      </DialogPanel>
    </div>
  </Dialog>
</template>
