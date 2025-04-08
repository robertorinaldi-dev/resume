<script setup lang="ts">
defineProps({
  data: {
    type: String,
    required: true,
  },
})

const menu = [
  { name: 'experience', title: 'Esperienze lavorative', icon: 'BriefcaseIcon', hash: '#experience' },
  { name: 'education', title: 'Formazione', icon: 'AcademicCapIcon', hash: '#education' },
  // { route: 'project', name: 'menu.project', icon: 'CodeBracketIcon' },
]
</script>

<template>
  <ResumeCard>
    <h2 class="text-foreground mb-4 text-lg font-semibold">
      Su di me
    </h2>
    <p class="mb-5 text-sm text-secondary-foreground" v-html="data" />
    <!-- <div class="my-5 border-t border-dashed border-gray-200"></div> -->
    <ul class="inline-flex gap-3">
      <!-- Menu -->
      <li v-for="(item, index) of menu" :key="index">
        <NuxtLinkLocale :to="item" class="group inline-block">
          <MediaHeroIcon :icon="item.icon" is-link >
            {{ $t(item.title) }}
          </MediaHeroIcon>
        </NuxtLinkLocale>
      </li>
    </ul>
  </ResumeCard>
</template>
