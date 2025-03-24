<script setup lang="ts">
import type { InjectedFormGroupValue } from '~/types/form'

const props = defineProps({
  id: {
    type: String,
    default: null,
  },
  name: {
    type: String,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 100,
  },
  step: {
    type: Number,
    default: 1,
  },
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

const model = defineModel<number>({ default: null })

const formFieldGroup = inject<InjectedFormGroupValue | null>('form-field-group', null)

const id = ref(props.id)
const name = computed(() => props.name || formFieldGroup?.name.value)
const disabled = computed(() => props.disabled || formFieldGroup?.disabled.value || false)

onMounted(() => {
  if (!id.value) {
    id.value = `id-${Math.random().toString(36).slice(2, 6)}-${Date.now().toString(36).slice(4, 8)}`

    if (formFieldGroup) {
      formFieldGroup.inputId.value = id.value
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
  <div class="relative flex h-9 w-full items-center py-1.5">
    <input
      :id="id"
      ref="input"
      v-model.number="model"
      :name="name"
      :min="min"
      :max="max"
      :step="step"
      :disabled="disabled"
      type="range"
      class="focus:outline-hidden h-2 w-full cursor-pointer appearance-none rounded-md bg-gray-100 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 [&::-moz-range-thumb]:size-4 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-primary [&::-moz-range-thumb]:transition-all [&::-moz-range-thumb]:duration-150 [&::-moz-range-thumb]:ease-in-out [&::-moz-range-thumb]:focus:ring-2 [&::-moz-range-thumb]:focus:ring-primary [&::-moz-range-thumb]:focus:ring-offset-2 [&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:duration-150 [&::-webkit-slider-thumb]:ease-in-out [&::-webkit-slider-thumb]:focus:ring-2 [&::-webkit-slider-thumb]:focus:ring-primary [&::-webkit-slider-thumb]:focus:ring-offset-2"
      :aria-describedby="`${id}-description`"
    >
  </div>
</template>
