<script setup lang="ts">
const props = defineProps({
  image: {
    type: Object,
    required: true,
  },
  sizes: {
    type: String,
    default: '100vw',
  },
  loading: {
    type: String as PropType<'lazy' | 'eager'>,
    default: 'lazy',
  },
  fetchpriority: String,
})

const progressiveSizes = ref('32px')

onMounted(() => {
  progressiveSizes.value = props.sizes
})
</script>

<script>
// use normal <script> to declare options
export default {
  inheritAttrs: false,
}
</script>

<template>
  <picture>
    <source
      :srcset="image.srcset"
      :sizes="progressiveSizes"
    >
    <img
      class="size-full object-cover object-center"
      v-bind="$attrs"
      :alt="image.alt"
      :src="image.src"
      :loading="loading"
      :fetchpriority="fetchpriority"
    >
  </picture>
</template>
