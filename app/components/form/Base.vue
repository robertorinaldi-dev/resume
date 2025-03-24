<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'
import { useLoading } from 'vue-loading-overlay'

const props = defineProps({
  name: {
    type: String,
    default: 'message',
  },
  netlify: {
    type: Boolean,
    default: false,
  },
  withFile: {
    type: Boolean,
    default: false,
  },
  action: {
    type: String,
    default: '/',
  },
  thankYouPage: {
    type: [Object, String] as PropType<RouteLocationRaw | string>,
    default: null,
  },
  withConfirm: {
    //   TO DO
    type: Boolean,
    default: false,
  },
  errorMessage: {
    type: String,
    default: 'Errore nell\'invio del messaggio',
  },
})

const $loading = useLoading({
  // options
})

const model = defineModel({
  type: Object,
  default: () => {},
})

const success = defineModel<boolean>('success')

const error = defineModel<boolean>('error')

const formProps = computed(() => ({
  ...props.netlify && { 'data-netlify': 'netlify', 'data-netlify-honeypot': `${props.name}-hp` },
  ...props.withFile && { enctype: 'multipart/form-data' },
}))

const defaultData = { ...model.value }

const form = ref<HTMLFormElement>()

async function handleSubmit() {
  const loader = $loading.show()

  success.value = false
  error.value = false

  const formData = new FormData(form.value)
  formData.append('type', props.name)

  await $fetch(props.action, {
    method: 'POST',
    headers: props.withFile ? {} : { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: props.withFile ? formData : new URLSearchParams(formData as any).toString(),
    timeout: 3000,
    // async onRequest({ request }) {
    //   console.log(request)
    // },
    async onResponse({ response }) {
      console.log(response)

      loader.hide()

      if (!response.ok) {
        console.error(response.statusText)

        error.value = true

        return
      }

      if (props.thankYouPage)
        await navigateTo(props.thankYouPage)
      else
        success.value = true

      model.value = { ...defaultData }
    },
  })
}
</script>

<template>
  <div>
    <form
      ref="form" :name="name" method="POST" v-bind="formProps"
      class="flex size-full flex-col justify-between"
      @submit.prevent="handleSubmit"
    >
      <div class="hidden">
        <label>
          Don't fill this out if you're human:
          <input :name="`${name}-hp`" aria-label="hp">
        </label>
      </div>
      <input type="hidden" name="form-name" :value="name">
      <slot />

      <slot name="privacy">
        <FormFieldCheckbox v-model="model.privacy" name="privacy" class="mt-4 w-full" required>
          Accetto l'
          <NuxtLinkLocale class="underline" to="privacy-policy" target="_blank">
            Informativa sulla privacy
          </NuxtLinkLocale>
        </FormFieldCheckbox>

        <FormFieldCheckbox v-model="model.newsletter" name="newsletter" class="mt-4 w-full">
          Voglio iscrivermi alla newsletter
        </FormFieldCheckbox>
      </slot>

      <footer class="relative flex w-full flex-col items-center justify-between">
        <slot name="buttons" :submit="handleSubmit">
          <div class="mt-4 flex w-full items-center justify-center">
            <ButtonSubmit name="invia">
              Invia messaggio
            </ButtonSubmit>
          </div>
        </slot>

        <slot
          name="error" :error="error" :error-message="errorMessage"
        >
          <div class="mt-4 flex min-h-20 w-full items-center justify-center">
            <FormAlertError v-model="error" title="Errore">
              {{ errorMessage }}
            </FormAlertError>
          </div>
        </slot>
      </footer>
    </form>

    <slot name="success" :success="success">
      <ModalSuccessful v-model="success" title="Messaggio inviato" button="OK">
        Grazie per averci contattato. <br>La ricontatteremo il prima possibile!
      </ModalSuccessful>
    </slot>
  </div>
</template>
