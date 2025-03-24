import type { ContentNavigationItem } from '@nuxt/content'

export interface NavigationItem extends ContentNavigationItem {
  name?: string
  highlighted?: boolean
  flyout?: boolean
  children?: NavigationItem[]
}
