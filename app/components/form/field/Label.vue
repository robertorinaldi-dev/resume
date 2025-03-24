<script setup lang="ts">
import StarIcon from '@heroicons/vue/16/solid/StarIcon'

defineProps({
  forId: {
    type: String,
    default: null,
  },
  value: {
    type: String,
    default: null,
  },
  hint: {
    type: String,
    default: null,
  },
  description: {
    type: String,
    default: null,
  },
  required: {
    type: Boolean,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: null,
  },
  labelClass: {
    type: [String, Object, Array],
    default: null,
  },
})
</script>

<template>
  <div v-if="value !== null || $slots.default">
    <div class="flex justify-between text-gray-900">
      <label
        :for="forId"
        class="flex items-center text-sm font-medium leading-6"
        :class="labelClass"
      >
        <slot v-bind="{ required }">
          {{ value || '&nbsp;' }}
        </slot>
        <StarIcon
          v-if="required"
          class="-mt-1 ml-1 size-2"
        />
      </label>
      <span
        v-if="hint || $slots.hint"
        class="text-sm leading-6 text-gray-500"
      >
        <slot name="hint">
          {{ hint }}
        </slot>
      </span>
    </div>
    <p
      v-if="description !== null || $slots.description"
      :id="`${forId}-description`"
      class="text-sm text-gray-500"
    >
      <slot name="description">
        {{ description || '&nbsp;' }}
      </slot>
    </p>
  </div>
</template>
