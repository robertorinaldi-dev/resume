<script setup lang="ts">
const { locale } = useI18n()

const { data: menu } = await useAsyncData(`footer-menu`, () =>
  queryCollectionNavigation(`content_${locale.value}`)
    .where('menu', '=', 'footer'), {
  watch: [locale],
})
</script>

<template>
  <nav>
    <ul class="flex size-full flex-col items-center desktop:flex-row">
      <MenuItem
        v-for="(item, index) of menu"
        :key="`${item.title}-${index}`"
        class="mb-4 desktop:mb-0"
        :value="item"
      />
    </ul>
  </nav>
</template>
