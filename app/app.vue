<script setup lang="ts">
import { site } from '@/utils/data'

const runtimeConfig = useRuntimeConfig()

useHead({
  title: '',
  titleTemplate: ((title) => `${title} - ${site.name}`),
  meta: [
    {
      name: 'description',
      content: site.description || site.name,
    },
    {
      property: 'fb:app_id',
      content: site.facebookAppId,
    },
    {
      property: 'og:site_name',
      content: site.name,
    },
    {
      property: 'og:title',
      content: site.name,
    },
    {
      property: 'og:description',
      content: site.description || site.name,
    },
    {
      property: 'og:type',
      content: 'page',
    },
    {
      property: 'og:url',
      content: runtimeConfig.public.siteUrl || site.url,
    },
    {
      property: 'og:image',
      content: `${runtimeConfig.public.siteUrl || site.url}${site.image}`,
    },
    {
      name: 'twitter:site',
      content: site.twitterSite,
    },
    {
      name: 'twitter:card',
      content: 'summary',
    },
    {
      name: 'twitter:title',
      content: site.name,
    },
    {
      name: 'twitter:description',
      content: site.description || site.name,
    },
    {
      name: 'twitter:image',
      content: `${runtimeConfig.public.siteUrl || site.url}${site.image}`,
    },
    {
      name: 'twitter:image:alt',
      content: site.name,
    },
  ],
})

// const route = useRoute()
// const isHome = ref(/index[_]{3}/.test(route.name))
// watch(
//   () => route,
//   () => (isHome.value = /index[_]{3}/.test(route.name)),
//   { deep: true },
// )
</script>

<template>
  <div class="w-full bg-white bg-cover font-sans text-black">
    <div class="mx-auto w-full max-w-screen-2xl">
      <Header class="relative isolate z-10 px-4 md:px-8" />
      <NuxtPage class="my-8 px-8 xl:px-12" />
    </div>
    <Footer />
  </div>
</template>

<style>
@reference "assets/css/tailwind.css";

html {
  font-size: 16px;
}

.blur-enter-active,
.blur-leave-active {
  @apply min-h-screen transition-all duration-500;
}

.blur-leave-active {
  @apply absolute inset-0 w-full;
}

.blur-enter-from,
.blur-leave-to {
  @apply opacity-0 blur-lg;
}
</style>
