<script setup lang="ts">
const { locale: actualLocale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

// const availableLocales = computed(() => {
//   return locales.value
//     .map(locale =>
//       typeof locale === 'string'
//         ? { code: locale, name: locale }
//         : locale,
//     )
//     .filter(locale => locale.code !== actualLocale.value)
// })
</script>

<template>
  <div class="flex flex-col items-start desktop:flex-row desktop:items-center">
    <NuxtLink
      v-for="(locale, index) in locales"
      :key="index"
      class="flex w-full cursor-pointer items-center justify-center whitespace-nowrap p-2 text-center uppercase transition duration-200 ease-in-out hover:no-underline desktop:w-auto"
      :to="switchLocalePath(locale.code)"
    >
      <img
        class="mr-3"
        :src="`/media/lang/${locale.code}.png`"
        :alt="locale.name"
      >
      {{ locale.name }}
    </NuxtLink>
  </div>
</template>
