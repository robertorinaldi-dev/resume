<script lang="ts" setup>
const props = defineProps({
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
  },
  step: {
    type: Number,
    default: 1,
  },
})
const model = defineModel<string | number>({ default: '' })

const isMin = computed(() => {
  return +model.value <= props.min
})

const isMax = computed(() => {
  return props.max ? +model.value >= props.max : false
})

function decrement() {
  model.value = Math.max(
    props.min,
    props.max
      ? Math.min(props.max, +model.value + 1)
      : +model.value - props.step,
  )
}

function increment() {
  model.value = Math.max(
    props.min,
    props.max
      ? Math.min(props.max, +model.value + 1)
      : +model.value + props.step,
  )
}
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<template>
  <div>
    <div class="relative flex w-full items-stretch">
      <button
        type="button"
        class="shadow-xs focus:outline-hidden z-10 border-none border-gray-300 bg-gray-400 px-3 py-1.5 text-lg italic leading-6 text-gray-900 ring-1 ring-gray-600 placeholder:text-gray-600 hover:bg-gray-200 focus:ring-2 focus:ring-primary disabled:cursor-not-allowed disabled:bg-gray-200"
        :disabled="isMin"
        @click="decrement"
      >
        <svg
          class="size-3 text-gray-900"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 2"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h16"
          />
        </svg>
      </button>
      <FormFieldInput
        v-bind="$attrs"
        v-model.trim="model"
        aria-roledescription="Number field"
        type="number"
        class="flex-1"
        input-class="text-center [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
      />
      <button
        type="button"
        class="shadow-xs focus:outline-hidden z-10 border-none border-gray-300 bg-gray-400 px-3 py-1.5 text-lg italic leading-6 text-gray-900 ring-1 ring-gray-600 placeholder:text-gray-600 hover:bg-gray-200 focus:ring-2 focus:ring-primary disabled:cursor-not-allowed disabled:bg-gray-200"
        :disabled="isMax"
        @click="increment"
      >
        <svg
          class="size-3 text-gray-900"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 1v16M1 9h16"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
