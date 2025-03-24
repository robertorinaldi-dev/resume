<script setup lang="ts">
const { locale } = useI18n()

const { data: menu } = await useAsyncData(`main-menu`, () =>
  queryCollectionNavigation(`content_${locale.value}`)
    .where('menu', '=', 'main'), {
  watch: [locale],
})
</script>

<template>
  <div
    class="flex flex-col items-center justify-center space-y-2"
  >
    <template
      v-for="(item, index) of menu"
      :key="`${item.title}-${index}`"
    >
      <MenuMobileSubmenu
        v-if="item.children && item.children.length > 1"
        :value="item"
      />

      <MenuItem
        v-else
        :value="item"
      />
    </template>
  </div>
</template>
