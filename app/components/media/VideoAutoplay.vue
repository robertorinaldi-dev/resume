<script lang="ts" setup>
const props = defineProps({
  srcMobile: String,
  src: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
  },
  pause: Boolean, // Pause when not visible
  loop: Boolean,
  multiple: Boolean, // Play multiple videos
})

const video = ref<HTMLVideoElement | null>(null)
const source = ref<HTMLSourceElement | null>(null)

const videoPlayPromise = ref<Promise<void>>()

function videoScroll() {
  requestAnimationFrame(async () => {
    if (!video.value || !source.value || video.value.ended) {
      window.removeEventListener('scroll', videoScroll)
      return
    }

    const windowHeight = window.innerHeight

    const videoHeight = video.value.clientHeight
    const videoTop = video.value.getBoundingClientRect().top
    const videoBottom = videoTop + videoHeight

    if (
      (
        (props.multiple || document.body.scrollHeight - 50 <= window.scrollY + window.innerHeight) // Multiple plays together || end of scroll
        && videoTop <= Math.max(0, (windowHeight - videoHeight / 2))
        && videoBottom >= Math.min(windowHeight, videoHeight / 2) // Video on screen
      )
      || (videoTop <= windowHeight / 2 && videoBottom >= windowHeight / 2) // Video centered
    ) {
      video.value.classList.remove('opacity-50')
      videoPlayPromise.value = video.value.play()
    }
    else if (props.pause) {
      // console.log('PAUSE SCROLL', videoPlayPromise.value)
      await videoPlayPromise.value
      video.value.pause()
      video.value.classList.add('opacity-50')
    }
  })
}

function videoResize() {
  requestAnimationFrame(async () => {
    if (!video.value || !source.value)
      return

    if (!props.srcMobile) {
      window.removeEventListener('resize', videoResize)
      videoScroll()
      return
    }

    const isDesktop = window.matchMedia('(min-width: 640px)').matches

    if (isDesktop && !source.value.src.includes(props.src)) {
      // console.log('PAUSE RESIZE', videoPlayPromise.value)
      await videoPlayPromise.value
      video.value.pause()
      source.value.src = props.src
      video.value.load()
    }

    if (!isDesktop && !source.value.src.includes(props.srcMobile)) {
      // console.log('PAUSE RESIZE', videoPlayPromise.value)
      await videoPlayPromise.value
      video.value.pause()
      source.value.src = props.srcMobile
      video.value.load()
    }

    // Resize -> Scroll
    videoScroll()
  })
}

onNuxtReady(() => {
  videoResize()

  window.addEventListener('scroll', videoScroll)
  window.addEventListener('resize', videoResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', videoResize)
  window.removeEventListener('scroll', videoScroll)
})
</script>

<template>
  <video ref="video" muted playsinline :loop="loop" class="transition-opacity duration-500 ease-in-out" :poster="poster">
    <source ref="source" :src="!srcMobile ? src : ''">
  </video>
</template>

<style>

</style>
