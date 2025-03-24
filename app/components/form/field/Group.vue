<script setup lang="ts">
import type { InjectedFormGroupValue } from '~/types/form'

const props = defineProps({
  name: {
    type: String,
    default: null,
  },
  label: {
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
  help: {
    type: String,
    default: null,
  },
  required: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const inputId = ref()

const required = ref(props.required)
const disabled = ref(props.disabled)

provide<InjectedFormGroupValue>('form-field-group', {
  inputId,
  name: computed(() => props.name),
  required,
  disabled,
})
</script>

<template>
  <div>
    <FormFieldLabel :value="label" :for-id="inputId" :hint="hint" :description="description" :required="required">
      <!-- https://github.com/vuejs/core/discussions/9621 -->
      <template v-if="$slots.label" #default="slotData">
        <slot name="label" v-bind="slotData" />
      </template>
      <template v-for="slot in ['hint', 'description'].filter(slot => slot in $slots)" #[slot]="slotData">
        <slot :name="slot" v-bind="slotData" />
      </template>
    </FormFieldLabel>

    <div class="mt-2">
      <slot />
      <p v-if="help || $slots.help" class="mt-2 text-sm text-gray-500">
        <slot name="help">
          {{ help }}
        </slot>
      </p>
    </div>
  </div>
</template>
