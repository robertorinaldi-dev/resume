<script setup lang="ts">
defineProps({
  product: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <MetaHead
    :title="product.title" :meta-description="product.meta_description" type="product"
    :image="product.mainImage.src"
  />
</template>
