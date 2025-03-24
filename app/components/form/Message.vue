<script setup lang="ts">
const data = ref({
  name: '',
  surname: '',
  email: '',
  phone: '',
  message: '',
  privacy: false,
})

const localePath = useLocalePath()
</script>

<template>
  <FormBase
    v-model="data" netlify :thank-you-page="localePath('thank-you')"
  >
    <div class="gap-4 sm:grid sm:grid-cols-2">
      <FormFieldGroup
        name="name"
        label="Nome"
        required
      >
        <FormFieldInput
          v-model.trim="data.name"
          placeholder="Nome"
        />
      </FormFieldGroup>
      <FormFieldGroup
        name="surname"
        label="Cognome"
      >
        <FormFieldInput
          v-model.trim="data.surname"
          placeholder="Cognome"
          :required="false"
        />
      </FormFieldGroup>
      <FormFieldGroup
        name="email"
        label="Email"
        :required="false"
      >
        <FormFieldInputMail
          v-model.trim="data.email"
          placeholder="Email"
        />
      </FormFieldGroup>
      <FormFieldGroup
        name="phone"
        label="Telefono"
      >
        <FormFieldInput
          v-model.trim="data.phone"
          placeholder="Telefono"
          :required="false"
        />
      </FormFieldGroup>
      <FormFieldGroup
        name="message"
        label="Messaggio"
        class="col-span-2"
      >
        <FormFieldTextarea
          v-model.trim="data.message"
          autoresize
          placeholder="Messaggio"
        />
      </FormFieldGroup>
    </div>
  </FormBase>
</template>
