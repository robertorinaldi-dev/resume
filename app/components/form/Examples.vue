<script setup lang="ts">
const plans = [
  {
    value: 'small',
    label: 'Small',
    description: '4 GB RAM / 2 CPUS / 80 GB SSD Storage',
  },
  {
    value: 'medium',
    label: 'Medium',
    description: '8 GB RAM / 4 CPUS / 160 GB SSD Storage',
  },
  {
    value: 'large',
    label: 'Large',
    description: '16 GB RAM / 8 CPUS / 320 GB SSD Storage',
  },
]

const notificationsMethod = [
  { value: 'email', label: 'Email' },
  { value: 'sms', label: 'Phone (SMS)' },
  { value: 'push', label: 'Push notification' },
]

const countries = ['United States', 'Canada', 'Mexico']

const countries2 = [
  {
    value: 'United States',
    label: 'US',
    children: [
      {
        value: 'Alaska',
        label: 'AK',
      },
      {
        value: 'New York',
        label: 'NY',
      },
      {
        value: 'Florida',
        label: 'FL',
      },
    ],
  },
  {
    value: 'Canada',
    label: 'CA',
    disabled: true,
  },
  {
    value: 'Mexico',
    label: 'MX',
  },
]

const data = ref({
  name: '',
  plan: 'small',
  notifications: 'sms',
  country: '',
  country2: '',
  range: 50,
  terms: false,
  privacy: false,
})

const success = ref(false)
</script>

<template>
  <FormBase
    v-model:success="success"
    v-model="data"
    name="examples"
    netlify
  >
    <div class="gap-4 sm:grid sm:grid-cols-6">
      <FormFieldGroup
        class="col-span-2"
        name="name"
        label="Nome"
        hint="Hint"
        description="Description"
        help="Help"
        required
      >
        <FormFieldInput
          v-model.trim="data.name"
          placeholder="Nome"
        />
      </FormFieldGroup>
      <FormFieldGroup
        class="col-span-2"
        name="name"
        label=""
        description=""
      >
        <FormFieldInput />
      </FormFieldGroup>
      <FormFieldGroup
        class="col-span-2"
        disabled
      >
        <template #label>
          Nome
        </template>
        <template #hint>
          Hint
        </template>
        <template #description>
          Description
        </template>
        <template #help>
          Help
        </template>
        <FormFieldInput
          v-model.trim="data.name"
          placeholder="Nome"
        />
      </FormFieldGroup>

      <FormFieldRadioGroup
        v-model="data.plan"
        class="col-span-3"
        :options="plans"
        name="plan"
        label="Piani"
        hint="Hint"
        description="Description"
        help="Help"
        required
      />
      <div class="col-span-3 flex flex-col space-y-8">
        <FormFieldRadioGroup
          v-model="data.notifications"
          class="col-span-3"
          :options="notificationsMethod"
          name="method"
          inline
        >
          <template #label>
            Notifications
          </template>
          <template #hint>
            Hint
          </template>
          <template #description>
            How do you prefer to receive notifications?
          </template>
          <template #help>
            Help
          </template>
        </FormFieldRadioGroup>
        <FormFieldRadioGroup
          v-model="data.notifications"
          class="col-span-3"
          :options="notificationsMethod"
          inline
          disabled
        />
      </div>

      <FormFieldGroup
        class="col-span-2"
        name="country"
        label="Country"
        required
      >
        <FormFieldSelect
          v-model="data.country"
          :options="countries"
        />
      </FormFieldGroup>
      <FormFieldGroup
        class="col-span-2"
        name="country2"
        label="Country"
      >
        <FormFieldSelect
          v-model="data.country2"
          :options="countries2"
          placeholder="Select"
        />
      </FormFieldGroup>
      <FormFieldGroup
        class="col-span-2"
        label="Country"
        disabled
      >
        <FormFieldSelect
          v-model="data.country2"
          :options="countries2"
        />
      </FormFieldGroup>

      <FormFieldGroup
        class="col-span-6"
        name="range"
        label="Range"
      >
        <FormFieldRange v-model="data.range" />
      </FormFieldGroup>
      <FormFieldRange
        v-model="data.range"
        class="col-span-6"
        label="Range"
        disabled
      />

      <FormFieldCheckbox
        v-model="data.terms"
        class="col-span-3"
        name="terms"
        label="Accetto i Termini"
        value="Terms accepted"
        description="Leggere attentamente"
        required
      />
      <FormFieldCheckbox
        v-model="data.terms"
        class="col-span-3"
        value="Terms accepted"
        disabled
      >
        Accetto i Termini
        <template #description>
          Leggere attentamente
        </template>
      </FormFieldCheckbox>

      <FormFieldToggle
        v-model="data.privacy"
        class="col-span-3"
        name="privacy"
        description="Il toggle non può essere obbligatorio"
      >
        Accetto l'<NuxtLinkLocale
          class="underline"
          to="privacy-policy"
          target="_blank"
        >
          Informativa sulla privacy
        </NuxtLinkLocale>
      </FormFieldToggle>
      <FormFieldToggle
        v-model="data.privacy"
        class="col-span-3"
        description="Il toggle non può essere obbligatorio"
        disabled
      >
        Accetto l'<NuxtLinkLocale
          class="underline"
          to="privacy-policy"
          target="_blank"
        >
          Informativa sulla privacy
        </NuxtLinkLocale>
      </FormFieldToggle>
    </div>

    <template #modal="{ handleSubmit }">
      <ModalConfirm
        v-model="success"
        @confirm="handleSubmit"
      >
        Vuoi mandarlo un'altra volta? :)
      </ModalConfirm>
    </template>
  </FormBase>
</template>
