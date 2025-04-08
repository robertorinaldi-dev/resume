<script setup lang="ts">
function iconName(theme: string) {
  if (theme === 'system')
    return 'ComputerDesktopIcon'
  if (theme === 'light')
    return 'SunIcon'
  if (theme === 'dark')
    return 'MoonIcon'
  return 'BookOpenIcon'
}

// const colorMode = useColorMode()

</script>

<template>
  <div>
    <ul class="h-full flex items-center gap-3">
      <li
        v-for="theme of ['system', 'light', 'dark', 'sepia']"
        :key="theme"
        class="inline-block"
      >
        <MediaHeroIcon
          :icon="iconName(theme)"
          is-link
          :is-selected="!$colorMode.unknown && theme === $colorMode.preference"
          @click="$colorMode.preference = theme"
        />
      </li>
    </ul>
  </div>
</template>
