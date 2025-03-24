<script setup lang="ts">
const mobileNavigation = ref(false)

watch(
  () => useRoute().fullPath,
  () => (mobileNavigation.value = false),
)
</script>

<template>
  <header class="flex h-full flex-col items-center">
    <div class="flex size-full items-center justify-between">
      <div class="flex h-28 w-56 shrink-0 items-center justify-start">
        <LogoWithLink />
      </div>
      <DesktopNavigation class="hidden h-28 grow desktop:block" />
      <div class="flex h-full items-center justify-end desktop:hidden">
        <ButtonHamburger
          :data-active="mobileNavigation"
          class="data-active:fixed z-50 cursor-pointer desktop:hidden"
          :class="{ dark: mobileNavigation }"
          @click="mobileNavigation = !mobileNavigation"
        />
      </div>
    </div>
    <MobileNavigation
      id="mobile-nav"
      :aria-hidden="!mobileNavigation"
      class="bg-dark-background text-dark-foreground dark pointer-events-auto fixed inset-0 z-40 h-full opacity-100 transition-opacity duration-500 ease-in-out aria-hidden:pointer-events-none aria-hidden:opacity-0 desktop:hidden"
    />
  </header>
</template>
