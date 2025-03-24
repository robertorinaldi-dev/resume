<script setup lang="ts">
import type { InjectedFormGroupValue } from '~/types/form'

const props = defineProps({
  id: {
    type: String,
    default: null, // If missing, use random
  },
  type: {
    type: String,
    default: 'text',
  },
  name: {
    type: String,
    default: null, // If missing, use form group name
  },
  placeholder: {
    type: String,
    default: '',
  },
  required: {
    type: Boolean,
    default: false, // If missing, use form group required
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  pattern: String,
  autofocus: {
    type: Boolean,
    default: false,
  },
  autofocusDelay: {
    type: Number,
    default: 100,
  },
  inputClass: {
    type: String,
    default: null,
  },
})

const model = defineModel<string | number>({ default: null })

const formFieldGroup = inject<InjectedFormGroupValue | null>('form-field-group', null)

const id = ref(props.id)
const name = computed(() => props.name || formFieldGroup?.name.value)
const required = computed(() => props.required || formFieldGroup?.required.value || false)
const disabled = computed(() => props.disabled || formFieldGroup?.disabled.value || false)

onMounted(() => {
  if (!id.value) {
    id.value = `id-${Math.random().toString(36).slice(2, 6)}-${Date.now().toString(36).slice(4, 8)}`

    if (formFieldGroup) {
      formFieldGroup.inputId.value = id.value
      formFieldGroup.required.value = required.value
      formFieldGroup.disabled.value = disabled.value
    }
  }
})

const input = ref<HTMLInputElement>()

function autoFocus() {
  if (props.autofocus)
    input.value?.focus()
}

onMounted(() => {
  setTimeout(() => {
    autoFocus()
  }, props.autofocusDelay)
})
</script>

<template>
  <div class="relative">
    <input
      :id="id"
      ref="input"
      v-model="model"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
      class="shadow-xs block w-full appearance-none rounded-md border-0 border-none px-3 py-1.5 text-sm leading-6 text-gray-900 ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-primary disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200"
      :pattern="pattern"
      :class="[
        $slots.leading ? 'pl-12' : '',
        $slots.trailing ? 'pr-12' : '',
        inputClass,
      ]"
      :aria-describedby="`${id}-description`"
    >
    <span v-if="$slots.leading" class="pointer-events-none absolute inset-y-0 left-3 flex max-w-6 items-center">
      <slot name="leading" />
    </span>
    <span v-if="$slots.trailing" class="pointer-events-none absolute inset-y-0 right-3 flex max-w-6 items-center">
      <slot name="trailing" />
    </span>
  </div>
</template>
