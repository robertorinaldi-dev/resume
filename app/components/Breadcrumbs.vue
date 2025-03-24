<!-- https://tailwindui.com/components/application-ui/navigation/breadcrumbs#component-7dc6ffff20237868ddf0e7d21cf17cf1 -->
<script setup lang="ts">
import { ChevronRightIcon, HomeIcon } from '@heroicons/vue/20/solid'

const props = defineProps({
  pages: Array as PropType<Array<{ title?: string, to?: string | { name: string, params?: { [key: string]: string } }, target?: string, current?: boolean }>>,
})

// const pages = [
//   { title: 'Esempio 1', to: {
//     name: 'index',
//   } },
//   { title: 'Esempio 2', to: {
//     name: 'contacts',
//     params: {
//       slug: 'test',
//     },

//   }, target: '_blank' },
//   { title: page.value?.title, current: true },
// ]

// console.log(props.pages)
</script>

<template>
  <nav class="mx-auto mb-4 flex w-full" aria-label="Breadcrumb">
    <ol role="list" class="flex items-center space-x-4">
      <li>
        <div>
          <NuxtLinkLocale to="/" class="text-gray-400 hover:text-primary">
            <HomeIcon class="size-5 shrink-0" aria-hidden="true" />
            <span class="sr-only">Home</span>
          </NuxtLinkLocale>
        </div>
      </li>
      <li v-for="(page, index) in pages" :key="index">
        <div class="flex items-center">
          <ChevronRightIcon class="size-5 shrink-0 text-gray-400" aria-hidden="true" />
          <span v-if="page.current" class="ml-4 cursor-default text-sm font-bold text-gray-400">
            {{ page.title }}
          </span>
          <NuxtLinkLocale
            v-else
            :to="page.to" class="ml-4 text-sm font-medium text-gray-400 hover:text-primary"
            :target="page.target"
            :aria-current="page.current ? 'page' : undefined"
          >
            {{ page.title }}
          </NuxtLinkLocale>
        </div>
      </li>
    </ol>
  </nav>
</template>
