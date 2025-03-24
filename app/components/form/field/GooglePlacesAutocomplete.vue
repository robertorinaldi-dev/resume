<script lang="ts" setup>
import MapPinIcon from '@heroicons/vue/20/solid/MapPinIcon'
import { usePlacesAutocomplete } from 'vue-use-places-autocomplete'

// const config = useRuntimeConfig()

const query = ref('')
const { suggestions } = usePlacesAutocomplete(query, {
  // apiKey: config.public.googleMapsKey,
  debounce: 500,
  minLengthAutocomplete: 3,
  autocompletionRequest: {
    componentRestrictions: {
      country: 'IT',
    },
  },
})

const options = computed(() => suggestions.value.map(suggestion => suggestion.description))

const model = defineModel<string | number | { value: string }>({ default: null })
</script>

<template>
  <FormFieldComboboxAutocomplete
    v-model="model"
    v-model:query="query"
    :options="options"
    dynamic-options
  >
    <template #trailing>
      <MapPinIcon
        class="size-5 text-gray-400"
        aria-hidden="true"
      />
    </template>
  </FormFieldComboboxAutocomplete>
</template>
