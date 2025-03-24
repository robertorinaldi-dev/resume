<!-- https://tailwindui.com/components/application-ui/feedback/alerts#component-8a099d76389c1c4d6d4e92d69acbc8d2 -->
<script setup lang="ts">
import XCircleIcon from '@heroicons/vue/20/solid/XCircleIcon'
import XMarkIcon from '@heroicons/vue/20/solid/XMarkIcon'

defineProps({
  title: {
    type: String,
    default: 'Errore',
  },
})

const model = defineModel<boolean>()

function close() {
  model.value = false
}
</script>

<template>
  <div v-show="model" class="rounded-md bg-red-50 p-4">
    <div class="flex">
      <div class="shrink-0">
        <XCircleIcon class="size-5 text-red-400" aria-hidden="true" />
      </div>
      <div class="ml-3">
        <h3 class="mt-0 text-sm font-bold text-red-800">
          {{ title }}
        </h3>
        <div class="mt-2 text-sm text-red-700">
          <slot />
        </div>
      </div>
      <div class="ml-auto pl-3">
        <div class="-m-1.5">
          <button type="button" class="focus:outline-hidden inline-flex rounded-md bg-red-50 p-1.5 text-red-500 hover:bg-red-100 focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-red-50" @click="close">
            <span class="sr-only">Dismiss</span>
            <XMarkIcon class="size-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
