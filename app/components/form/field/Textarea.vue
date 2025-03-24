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
    default: null,
  },
  rows: {
    type: Number,
    default: 5,
  },
  autoresize: {
    type: Boolean,
    default: false,
  },
  resizable: {
    type: Boolean,
    default: false,
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
  textareaClass: {
    type: String,
    default: null,
  },
})

const model = defineModel<string>({ default: null })

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

const textarea = ref<HTMLTextAreaElement>()

function autoFocus() {
  if (props.autofocus)
    textarea.value?.focus()
}

function autoResize() {
  if (props.autoresize) {
    if (!textarea.value)
      return

    textarea.value.rows = props.rows

    const styles = window.getComputedStyle(textarea.value)
    const paddingTop = Number.parseInt(styles.paddingTop)
    const paddingBottom = Number.parseInt(styles.paddingBottom)
    const padding = paddingTop + paddingBottom
    const lineHeight = Number.parseInt(styles.lineHeight)
    const { scrollHeight } = textarea.value
    const newRows = (scrollHeight - padding) / lineHeight

    if (newRows > props.rows)
      textarea.value.rows = newRows
  }
}

watch(() => model, () => {
  nextTick(autoResize)
})

onMounted(() => {
  setTimeout(() => {
    autoFocus()
  }, props.autofocusDelay)
  setTimeout(() => {
    autoResize()
  }, 100)
})
</script>

<template>
  <div class="relative mt-2">
    <textarea
      :id="id"
      ref="textarea"
      v-model="model"
      :name="name"
      :placeholder="placeholder"
      :rows="rows"
      :required="required"
      :disabled="disabled"
      class="shadow-xs block w-full appearance-none rounded-md border-0 py-1.5 text-sm leading-6 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200"
      :class="[
        resizable ? 'resize' : 'resize-none',
        textareaClass,
      ]"
      :aria-describedby="`${id}-description`"
      @input="autoResize"
    />
    <slot />
  </div>
</template>
