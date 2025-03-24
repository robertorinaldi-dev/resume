<script setup lang="ts">
import { Switch } from '@headlessui/vue'

const props = defineProps({
  id: {
    type: String,
    default: null,
  },
  name: {
    type: String,
    default: null,
  },
  label: {
    type: String,
    default: null,
  },
  description: {
    type: String,
    default: null,
  },
  value: {
    type: String,
    default: 'true',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const model = defineModel<boolean>({ default: null })

const id = ref(props.id)

onMounted(() => {
  if (!id.value) {
    id.value = `id-${Math.random().toString(36).slice(2, 6)}-${Date.now().toString(36).slice(4, 8)}`
  }
})
</script>

<template>
  <div class="flex items-center">
    <Switch
      :id="id"
      v-model="model"
      :name="name"
      :value="value"
      :disabled="disabled"
      :aria-checked="model"
      class="focus:outline-hidden group relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed"
      :class="[model ? 'bg-primary/90 disabled:bg-gray-400' : 'bg-gray-200']"
      :aria-describedby="`${id}-description`"
    >
      <span class="sr-only">{{ label }}</span>
      <span
        class="pointer-events-none relative inline-block size-5 translate-x-0 rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out group-aria-checked:translate-x-5"
      >
        <span
          class="absolute inset-0 flex size-full items-center justify-center opacity-100 transition-opacity duration-200 ease-in group-aria-checked:opacity-0 group-aria-checked:duration-100 group-aria-checked:ease-out"
          aria-hidden="true"
        >
          <svg class="size-3 fill-none text-gray-400" viewBox="0 0 12 12">
            <path
              d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <span
          class="absolute inset-0 flex size-full items-center justify-center opacity-0 transition-opacity duration-100 ease-out group-aria-checked:opacity-100 group-aria-checked:duration-200 group-aria-checked:ease-in"
          aria-hidden="true"
        >
          <svg class="size-3 fill-current text-primary/90 group-disabled:text-gray-500" viewBox="0 0 12 12">
            <path
              d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"
            />
          </svg>
        </span>
      </span>
    </Switch>
    <FormFieldLabel
      class="ml-3"
      :label-class="[disabled ? 'text-gray-500 cursor-not-allowed' : 'cursor-pointer']"
      :value="label"
      :for-id="id"
      :description="description"
      :disabled="disabled"
    >
      <!-- https://github.com/vuejs/core/discussions/9621 -->
      <template v-for="slot in ['default', 'description']" #[slot]="slotData">
        <slot :name="slot" v-bind="slotData" />
      </template>
    </FormFieldLabel>
  </div>
</template>
