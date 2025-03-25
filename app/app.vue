<script setup lang="ts">
import { site } from '@/utils/data'

const runtimeConfig = useRuntimeConfig()

useHead({
  title: '',
  titleTemplate: title => `${title} - ${site.name}`,
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

const { locale } = useI18n()

const { data: resume } = await useAsyncData(`data_resume___${locale.value}`, () =>
  queryCollection('data_resume').first())

console.log(locale.value, resume.value)
</script>

<template>
  <div class="bg-gray-100 dark:bg-night-900 min-h-screen">
    <main class="container mx-auto max-w-6xl px-4 py-4">
      <div v-if="resume" class="gap-5 sm:grid lg:grid-cols-3">
        <!-- Start left side -->
        <div class="space-y-5">
          <ResumeProfileCard :data="resume.profile" />
          <ResumeCvCard :data="resume?.cv" />
        <!-- End resume -->
        <!-- Start user information -->
        <!-- <InfoCard /> -->
        <!-- End user information -->
        <!-- Start skills -->
        <!-- <SkillCard /> -->
        <!-- End skills -->
        <!-- Start Language -->
        <!-- <LanguageCard /> -->
        </div>
        <!-- End left side -->
        <!-- Start right side -->
        <div class="mt-4 space-y-5 sm:mt-0 lg:col-span-2">
        <!-- Start about me -->
        <!-- <AboutCard /> -->
        <!-- End about me -->
        </div>
      <!-- End right side -->
      </div>
    </main>
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
