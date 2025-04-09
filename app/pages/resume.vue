<script setup lang="ts">
import type { PageCollections } from '@nuxt/content'

// definePageMeta({
//   layout: 'resume',
// })

const { locale } = useI18n()

const collection = computed(() => `content_${locale.value}` as keyof PageCollections)

const { data: page } = await useAsyncData(`index___${locale.value}`, () => {
  return queryCollection(collection.value).path('/').first()
})

const { data: resume } = await useAsyncData(`data_resume___${locale.value}`, () =>
  queryCollection('data_resume').first()
)

const about = ref('experience')
</script>

<template>
  <div v-if="page">
    <MetaContentHead :content="page" />

    <main class="container mx-auto max-w-6xl px-4 py-4">
      <div v-if="resume" class="grid items-start gap-4 lg:grid-cols-3">
        <div class="grid gap-4">
          <ResumeProfileCard :data="resume.profile" maxi-rounded="topLeft" />
          <!-- <ResumeCvCard :data="resume.cv" /> -->
          <ResumeInfoCard :data="resume.information" />
          <ResumeSkillCard :data="resume.skill" />
          <ResumeLanguageCard :data="resume.language" />
        </div>
        <div class="grid gap-4 lg:col-span-2">
          <ResumeAboutCard :data="resume.profile.aboutMe" maxi-rounded="topRight" v-model="about" />
          <div class="relative">
            <Transition name="blur">
              <ResumeExperienceCard v-if="about === 'experience'" :data="resume.experience" />
              <ResumeEducationCard v-else-if="about === 'education'" :data="resume.education" />
            </Transition>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
