<script setup lang="ts">
const { locale } = useI18n()

const { data: resume } = await useAsyncData(`data_resume___${locale.value}`, () =>
  queryCollection('data_resume').first())
</script>

<template>
  <main class="container mx-auto max-w-6xl px-4 py-4">
    <div v-if="resume" class="grid gap-4 lg:grid-cols-3 items-start">
      <div class="grid gap-4">
        <ResumeProfileCard :data="resume.profile" maxi-rounded="topLeft" />
        <ResumeCvCard :data="resume.cv" />
        <ResumeInfoCard :data="resume.information" />
        <ResumeSkillCard :data="resume.skill" />
        <ResumeLanguageCard :data="resume.language" />
      </div>
      <div class="grid gap-4 lg:col-span-2">
        <ResumeAboutCard :data="resume.profile.aboutMe" maxi-rounded="topRight" />
        <div class="relative">
          <slot />
        </div>
      </div>
    </div>
  </main>
</template>
