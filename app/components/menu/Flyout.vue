<!-- https://tailwindui.com/components/marketing/elements/flyout-menus#component-f2922faa2add4efd389ddfccc77b2f22 -->
<!-- https://tailwindui.com/components/marketing/elements/headers#component-9b3074c76a13e5151c82c2be12e52a6c -->

<script setup lang="ts">
import type { NavigationItem } from '~/types/navigation'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import ChevronDownIcon from '@heroicons/vue/20/solid/ChevronDownIcon'

defineProps({
  value: {
    type: Object as PropType<NavigationItem>,
    required: true,
  },
})
</script>

<template>
  <Popover>
    <PopoverButton id="flyout-button">
      <MenuItem
        :value="value"
        :to="undefined"
      >
        <template #trailing>
          <ChevronDownIcon class="size-5" aria-hidden="true" />
        </template>
      </MenuItem>
    </PopoverButton>

    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 -translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-1"
    >
      <PopoverPanel
        class="absolute inset-x-0 top-full -z-10 flex w-full justify-around bg-white px-4 py-8 shadow-lg"
      >
        <MenuItem
          v-for="(subitem, index) in value.children"
          :key="`${subitem.title}-${index}`"
          :value="subitem"
          mode="desktop"
        />
      </PopoverPanel>
    </Transition>
  </Popover>
</template>
