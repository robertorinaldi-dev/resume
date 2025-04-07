<script setup lang="ts">
defineProps({
  data: {
    type: String,
    required: true,
  },
})

const menu = [
  { route: 'experience', name: 'Esperienze lavorative', icon: 'BriefcaseIcon' },
  { route: 'education', name: 'Formazione', icon: 'AcademicCapIcon' },
  // { route: 'project', name: 'menu.project', icon: 'CodeBracketIcon' },
]
</script>

<template>
  <ResumeCard>
    <h2 class="dark:text-dark-50 mb-4 text-lg font-semibold">
      Su di me
    </h2>
    <p class="dark:text-dark-200 mb-5 text-sm text-gray-600" v-html="data" />
    <!-- <div class="my-5 border-t border-dashed border-gray-200"></div> -->
    <ul class="inline-flex gap-3">
      <!-- Menu -->
      <li v-for="(item, index) of menu" :key="index">
        <NuxtLinkLocale :to="item.route" class="group inline-block">
          <MediaHeroIcon :icon="item.icon" is-link class="group-aria-[current=page]:bg-primary/20">
            {{ $t(item.name) }}
          </MediaHeroIcon>
        </NuxtLinkLocale>
      </li>
    </ul>
  </ResumeCard>
</template>
