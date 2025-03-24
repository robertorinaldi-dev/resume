<script setup lang="ts">
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
  options: {
    type: Array as PropType<Array<string | number | { value: string }>>,
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
  inputClass: {
    type: String,
    default: null,
  },
  inline: {
    type: Boolean,
    default: false,
  },
})

const model = defineModel<string | number | { value: string }>({
  default: null,
})

const normalizedOptions = computed(() => {
  return props.options.map((option) => {
    if (typeof option === 'string' || typeof option === 'number') {
      return {
        value: option.toString(),
        label: option.toString(),
        description: '',
        disabled: false,
      }
    }

    if (typeof option === 'object') {
      return {
        label: option.value,
        ...option,
      }
    }

    return {}
  })
})
</script>

<template>
  <div>
    <FormFieldLabel
      :value="label"
      :hint="hint"
      :description="description"
      :required="required"
      :disabled="disabled"
    >
      <!-- https://github.com/vuejs/core/discussions/9621 -->
      <template v-if="$slots.label" #default="slotData">
        <slot name="label" v-bind="slotData" />
      </template>
      <template
        v-for="slot in ['hint', 'description'].filter((slot) => slot in $slots)"
        #[slot]="slotData"
      >
        <slot :name="slot" v-bind="slotData" />
      </template>
    </FormFieldLabel>

    <fieldset class="mt-2">
      <legend class="sr-only">
        {{ label }}
      </legend>
      <div
        class="space-y-2"
        :class="{
          'sm:flex sm:items-center sm:space-x-10 sm:space-y-0': inline,
        }"
      >
        <FormFieldRadio
          v-for="(option, index) in normalizedOptions"
          :key="option.value"
          v-model="model"
          :name="name"
          :label="option.label"
          :description="option.description"
          :value="option.value"
          :disabled="option.disabled || disabled"
          :required="required"
          :autofocus="autofocus && index === 0"
          :autofocus-delay="autofocusDelay"
          :input-class="inputClass"
        />
      </div>
      <p v-if="help || $slots.help" class="mt-2 text-sm text-gray-500">
        <slot name="help">
          {{ help }}
        </slot>
      </p>
    </fieldset>
  </div>
</template>
