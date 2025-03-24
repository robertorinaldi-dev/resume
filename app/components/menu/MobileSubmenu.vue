<script setup lang="ts">
import type { NavigationItem } from '~/types/navigation'
import ChevronDownIcon from '@heroicons/vue/20/solid/ChevronDownIcon'
import { onClickOutside } from '@vueuse/core'

const props = defineProps({
  value: {
    type: Object as PropType<NavigationItem>,
    required: true,
  },
})

const submenu = ref(null)

const key = computed(() => props.value.name || props.value.path || props.value.title)

const selected = ref<string | undefined>()

function toggleSubmenu(page: string) {
  selected.value = selected.value === page ? undefined : page
}

onClickOutside(submenu, () => selected.value = undefined)
</script>

<template>
  <div
    ref="submenu"
    class="group relative flex h-full flex-col items-center justify-center desktop:h-full desktop:w-auto desktop:flex-row"
    :aria-expanded="selected === key"
  >
    <MenuItem
      as-button
      :value="value"
      @touchend="toggleSubmenu(key)"
    >
      <template #trailing>
        <ChevronDownIcon class="size-5" aria-hidden="true" />
      </template>
    </MenuItem>
    <div
      class="hidden w-full group-aria-expanded:block"
    >
      <template
        v-for="(subitem, i) in value.children"
        :key="`${subitem.title}-${i}`"
      >
        <div
          v-if="subitem.children"
          :value="subitem"
        >
          <span class="flex w-full items-center justify-center whitespace-nowrap p-2 text-center text-sm font-bold uppercase">
            {{ subitem.title }}
          </span>
          <MenuItem
            v-for="(subitem2, j) in subitem.children"
            :key="`${subitem2.title}-${j}`"
            class="text-xs hover:bg-white"
            :value="subitem2"
          />
        </div>
        <MenuItem
          v-else
          class="text-sm hover:bg-white"
          :value="subitem"
        />
      </template>
    </div>
  </div>
</template>
