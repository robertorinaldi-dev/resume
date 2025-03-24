<!--
    Use GSAP
    https://gsap.com/community/forums/topic/32782-video-scroll-animation/
 -->

<script lang="ts" setup>
defineProps({
  src: String,
})

const video = ref<HTMLVideoElement | null>(null)

function videoScroll() {
  // console.log(video.value?.currentTime, video.value?.duration)
  if (video.value && !video.value.ended) {
    const windowHeight = window.innerHeight

    // const videoHeight = video.value.clientHeight
    const videoTop = video.value.getBoundingClientRect().top

    if (video.value.currentTime < video.value.duration * (-videoTop + windowHeight / 2) / windowHeight)
      video.value.play()
    else
      video.value.currentTime = video.value.duration * (-videoTop + windowHeight / 2) / windowHeight

    // if (videoTop <= ((windowHeight) - (videoHeight * 0.5)) && videoTop >= (0 - (videoHeight * 0.5))) {

    //   video.value.pause()
    // }
    // else { video.value.pause() }
  }
  window.requestAnimationFrame(videoScroll)
}

onNuxtReady(async () => {
  window.requestAnimationFrame(videoScroll)
//   window.addEventListener('load', () => window.requestAnimationFrame(videoScroll))
//   window.addEventListener('scroll', () => window.requestAnimationFrame(videoScroll))
})

onUnmounted(() => {
  window.removeEventListener('load', () => videoScroll)
  window.removeEventListener('scroll', () => videoScroll)
})
</script>

<template>
  <video
    ref="video"
    muted
  >
    <source :src="src">
    Your browser does not support the video tag.
  </video>
</template>

<style>

</style>
