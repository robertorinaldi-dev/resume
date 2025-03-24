<!-- https://headlessui.com/v1/vue/combobox -->

<script lang="ts" setup>
import type { InjectedFormGroupValue } from '~/types/form'

import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/vue'
import CheckIcon from '@heroicons/vue/20/solid/CheckIcon'
import ChevronDownIcon from '@heroicons/vue/20/solid/ChevronDownIcon'

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
    type: Array as PropType<Array<string | number | { value: string, label?: string, disabled?: boolean, children?: { value: string, label?: string, disabled?: boolean }[] }>>,
    default: () => [],
  },
  dynamicOptions: Boolean,
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
  inputClass: {
    type: String,
    default: null,
  },

})

const model = defineModel<string | number | { value: string }>({ default: null })
const query = defineModel<string>('query', { default: '' })

const formFieldGroup = inject<InjectedFormGroupValue | null>('form-field-group', null)
const input = ref<ComponentPublicInstance>()

const name = computed(() => props.name || formFieldGroup?.name.value)
const required = computed(() => props.required || formFieldGroup?.required.value || false)
const disabled = computed(() => props.disabled || formFieldGroup?.disabled.value || false)

onMounted(() => {
  if (formFieldGroup) {
    formFieldGroup.inputId.value = input.value?.$el.id
    formFieldGroup.required.value = required.value
    formFieldGroup.disabled.value = disabled.value
  }
})

function normalizeOption(option: string | number | { value: string, label?: string, disabled?: boolean, children?: { value: string, label?: string, disabled?: boolean }[] } | undefined) {
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
      label: option.value,
      ...option,
    }
  }

  return {}
}

const filteredOptions = computed(() => {
  const normalizedOptions = props.options.map(option => normalizeOption(option))
  return props.dynamicOptions || query.value === ''
    ? normalizedOptions
    : normalizedOptions.filter((option) => {
        return option.value?.toLowerCase().includes(query.value.toLowerCase())
      })
})

function autoFocus() {
  if (props.autofocus)
    input.value?.$el.focus()
}

onMounted(() => {
  setTimeout(() => {
    autoFocus()
  }, props.autofocusDelay)
})
</script>

<template>
  <div>
    <Combobox
      v-model="model"
      as="div"
      class="relative"
      @update:model-value="query = ''"
    >
      <ComboboxInput
        :id="id"
        ref="input"
        v-model="query"
        :name="name"
        :required="required"
        :disabled="disabled"
        class="shadow-xs block w-full cursor-pointer border-0 bg-gray-400 py-4 pl-3 pr-10 text-lg leading-6 text-gray-900 ring-1 ring-gray-300 focus:ring-2 focus:ring-blue-900 disabled:cursor-not-allowed"
        :class="inputClass"
        :aria-describedby="`${id}-description`"
        @change="query = $event.target.value"
        @blur="query = ''"
      />
      <ComboboxOptions
        v-if="filteredOptions.length > 0"
        class="shadow-xs focus:outline-hidden absolute z-10 mt-1 max-h-60 w-full overflow-auto bg-gray-400 py-1 text-lg leading-6 ring-1 ring-gray-300"
      >
        <ComboboxOption
          v-for="option in filteredOptions"
          :key="`${id}-${option.value}`"
          v-slot="{ active, selected }"
          :value="option.value"
          as="template"
        >
          <li

            class="relative cursor-default select-none py-2 pl-3 pr-9"
            :class="[active ? 'bg-blue-400 text-white' : '']"
          >
            <span class="block truncate" :class="[selected && 'font-semibold']">
              {{ option.label }}
            </span>
            <span
              v-if="selected" class="absolute inset-y-0 right-0 flex items-center pr-4"
              :class="[active ? 'text-white' : 'text-gray-900']"
            >
              <CheckIcon class="size-5" aria-hidden="true" />
            </span>
          </li>
        </ComboboxOption>
      </ComboboxOptions>

      <span
        v-if="$slots.leading"
        class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
      >
        <slot name="leading" />
      </span>
      <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
        <slot name="trailing">
          <ComboboxButton>
            <ChevronDownIcon class="size-5 text-gray-400" aria-hidden="true" />
          </ComboboxButton>
        </slot>
      </span>
    </Combobox>
  </div>
</template>

<style>

</style>
