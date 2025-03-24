<script setup lang="ts">
const data = ref({
  name: '',
  surname: '',
  email: '',
  phone: '',
  message: '',
  curriculum: '',
  privacy: false,
})
</script>

<template>
  <FormBase
    v-model="data"
    name="work-with-us"
    :with-file="true"
    :netlify="true"
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
        name="curriculum"
        label="Curriculum"
        class="col-span-2"
      >
        <FormFieldInputFile
          v-model="data.curriculum"
          placeholder="Curriculum"
          :required="false"
          accept="application/*"
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

    <template #buttons>
      <div class="mt-4 flex items-center justify-center">
        <ButtonSubmit name="invia">
          Invia candidatura
        </ButtonSubmit>
      </div>
    </template>

    <template #error="{ error }">
      <FormAlertError
        :model-value="error"
        title="Errore"
      >
        Errore nell'invio della candidatura
      </FormAlertError>
    </template>

    <template #success="{ success }">
      <ModalSuccessful
        :model-value="success"
        title="Candidatura inviata"
        button="OK"
      >
        Abbiamo ricevuto la sua candidatura. <br>La ricontatteremo il prima possibile!
      </ModalSuccessful>
    </template>
  </FormBase>
</template>
