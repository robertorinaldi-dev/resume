<script setup lang="ts">
import FacebookIcon from '~/assets/icons/facebook.svg'
import InstagramIcon from '~/assets/icons/instagram.svg'
// import LinkedinIcon from '~/assets/icons/linkedin.svg'
</script>

<template>
  <div class="mx-2 flex items-center justify-between space-x-2">
    <NuxtLink
      to="https://www.facebook.com/"
      target="_blank"
      alt="Facebook"
      title="Facebook profile"
      aria-label="Facebook"
    >
      <FacebookIcon class="size-9 fill-current" />
    </NuxtLink>
    <NuxtLink
      to="https://www.instagram.com/"
      target="_blank"
      alt="Instagram"
      title="Instagram profile"
      aria-label="Instagram"
    >
      <InstagramIcon class="size-9 fill-current" />
    </NuxtLink>
    <!-- <NuxtLink
      to="https://www.linkedin.com/"
      target="_blank"
      alt="LinkedIn"
      title="LinkedIn profile"
      aria-label="LinkedIn"
    >
      <LinkedinIcon class="size-9 fill-current" />
    </NuxtLink> -->
  </div>
</template>
