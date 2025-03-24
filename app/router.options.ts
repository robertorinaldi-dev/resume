import type { RouterOptions } from '@nuxt/schema'

export default <RouterOptions> {
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    else {
      if (to.hash) {
        return {
          el: to.hash,
          top: 0,
          behavior: 'smooth',
        }
      }
      else {
        return {
          top: 0,
          behavior: 'smooth',
        }
      }
    }
  },
}
