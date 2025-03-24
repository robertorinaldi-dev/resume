<script setup lang="ts">
import type { PageCollections } from '@nuxt/content'
import type { NavigationItem } from '~/types/navigation'

const { locale } = useI18n()

const collection = computed(() => `content_${locale.value}` as keyof PageCollections)

const { data: menu } = await useAsyncData<NavigationItem[]>(
  `ticketing-menu___${locale.value}`,
  () => queryCollectionNavigation(collection.value).where('menu', '=', 'main'),
  { watch: [locale] },
)
</script>

<template>
  <div
    class="flex flex-row items-center justify-center space-x-2"
  >
    <template
      v-for="item of menu"
      :key="item.name"
    >
      <MenuFlyout
        v-if="item.flyout"
        :value="item"
      />

      <MenuDesktopSubmenu
        v-else-if="item.children?.length > 1"
        :value="item"
      />

      <MenuItem
        v-else
        :value="item"
      />
    </template>
  </div>
</template>
