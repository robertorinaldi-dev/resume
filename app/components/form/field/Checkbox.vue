<script setup lang="ts">
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
    type: [String, Number, Boolean, Object],
    default: true,
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
})

const model = defineModel<boolean>({ default: false })

const input = ref<HTMLInputElement | null>(null)

const id = ref(props.id)

onMounted(() => {
  if (!id.value)
    id.value = `id-${Math.random().toString(36).slice(2, 6)}-${Date.now().toString(36).slice(4, 8)}`
})

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
  <div class="relative flex items-start">
    <div class="flex h-6 items-center">
      <input
        :id="id"
        ref="input"
        v-model="model"
        type="checkbox"
        :name="name"
        :value="1"
        :required="required"
        :disabled="disabled"
        class="size-4 cursor-pointer appearance-none rounded-md border-gray-300 text-primary focus:ring-primary disabled:cursor-not-allowed disabled:text-gray-500"
        :aria-describedby="`${id}-description`"
      >
    </div>
    <FormFieldLabel
      class="ml-3"
      :label-class="[disabled ? 'text-gray-500 cursor-not-allowed' : 'cursor-pointer']"
      :value="label"
      :for-id="id"
      :description="description"
      :required="required"
      :disabled="disabled"
    >
      <!-- https://github.com/vuejs/core/discussions/9621 -->
      <template
        v-for="slot in ['default', 'description'].filter(slot => slot in $slots)"
        #[slot]="slotData"
      >
        <slot
          :name="slot"
          v-bind="slotData"
        />
      </template>
    </FormFieldLabel>
  </div>
</template>
