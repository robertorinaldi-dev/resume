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
  placeholder: {
    type: String,
    default: '-',
  },
  options: {
    type: Array as PropType<Array<string | number | { value: string | number, label?: string, disabled?: boolean, children?: { value: string, label?: string, disabled?: boolean }[] }>>,
    default: () => [],
  },
  required: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  autofocus: {
    type: Boolean,
    default: false,
  },
  autofocusDelay: {
    type: Number,
    default: 100,
  },
  selectClass: {
    type: String,
    default: null,
  },
})

// console.log(props.options)

const model = defineModel<string | number | { value: string | number } | null>({ default: null })

const formFieldGroup = inject<InjectedFormGroupValue | null>('form-field-group', null)

const id = ref(props.id)
const name = computed(() => props.name || formFieldGroup?.name.value)
const required = computed(() => props.required || formFieldGroup?.required.value || false)
const disabled = computed(() => props.disabled || formFieldGroup?.disabled.value || false)

onMounted(() => {
  if (!id.value) {
    id.value = `id-${Math.random().toString(36).slice(2, 6)}-${Date.now().toString(36).slice(4, 8)}`
  }

  if (formFieldGroup) {
    formFieldGroup.inputId.value = id.value
    formFieldGroup.required.value = required.value
    formFieldGroup.disabled.value = disabled.value
  }
})

function normalizeOption(option: null | string | number | { value: string | number, label?: string, disabled?: boolean, children?: { value: string, label?: string, disabled?: boolean }[] } | undefined) {
  if (option === null)
    return {}

  if (typeof option === 'string' || typeof option === 'number') {
    return {
      value: option.toString(),
      label: option.toString(),
      disabled: false,
      children: null,
    }
  }

  if (typeof option === 'object') {
    return {
      label: option.value.toString(),
      ...option,
    }
  }

  return {}
}

const normalizedOptions = computed(() => {
  return [
    {
      value: null,
      label: props.placeholder,
      disabled: required.value,
      selected: true,
      children: null,
    },
    ...props.options.map(option => normalizeOption(option)),
  ]
})

const normalizedValue = computed(() => normalizeOption(model.value)?.value)

const select = ref<HTMLSelectElement>()

function autoFocus() {
  if (props.autofocus)
    select.value?.focus()
}

onMounted(() => {
  setTimeout(() => {
    autoFocus()
  }, props.autofocusDelay)
})
</script>

<template>
  <div class="relative">
    <select
      :id="id"
      ref="select"
      v-model="model"
      :name="name"
      :required="required"
      :disabled="disabled"
      class="shadow-xs block w-full cursor-pointer rounded-md border-0 py-1.5 pl-3 pr-10 text-sm leading-6 text-gray-900 ring-1 ring-gray-300 focus:ring-2 focus:ring-primary disabled:cursor-not-allowed"
      :class="selectClass"
      :aria-describedby="`${id}-description`"
    >
      <template v-for="(option, index) in normalizedOptions">
        <optgroup
          v-if="option.children"
          :key="`${option.value}-optgroup-${index}`"
          :value="option.value"
          :label="option.label"
        >
          <option
            v-for="(childOption, index2) in option.children"
            :key="`${childOption.value}-${index}-${index2}`"
            :value="childOption.value"
            :selected="childOption.value === normalizedValue"
            :disabled="childOption.disabled"
            v-text="childOption.label"
          />
        </optgroup>
        <option
          v-else
          :key="`${option.value}-${index}`"
          :value="option.value"
          :selected="option.value === normalizedValue"
          :disabled="option.disabled"
          v-text="option.label"
        />
      </template>
    </select>

    <span v-if="$slots.leading" class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
      <slot name="leading" />
    </span>
    <span v-if="$slots.trailing" class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
      <slot name="trailing" />
    </span>
  </div>
</template>
