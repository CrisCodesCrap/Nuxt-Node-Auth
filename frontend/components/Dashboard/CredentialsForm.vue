<script setup lang="ts">
import { Ref } from "vue";

import { submitCredentialUpdate } from "~~/utility/submitCredentialUpdate";

const props: any = defineProps({
  user: {
    type: Object,
    required: true,
  },
});

const config = useRuntimeConfig();

const email: Ref<string> = ref(props.user.email);
const phone: Ref<string> = ref(props.user.phone);
const name: Ref<string> = ref(props.user.name);
const address: Ref<string> = ref(props.user.address);
const form: Ref<any> = ref(null);

const credentialsWrapper = {
  email: email,
  telephone: phone,
  "full name": name,
  address: address,
};

const submit = () =>
  submitCredentialUpdate({
    url: config.public.apiUrl,
    email: email.value,
    phone: phone.value,
    name: name.value,
    address: address.value,
  });

const field_type: string = "text";
</script>

<template>
  <div>
    <form id="formWrapper" ref="form" v-on:submit="submit()">
      <DashboardHeading content="Details" />
      <DashboardInput name="Email" :value="credentialsWrapper['email']" :type="field_type" />
      <DashboardInput name="Telephone" :value="credentialsWrapper['telephone']" :type="field_type" />
      <DashboardInput name="Full Name" :value="credentialsWrapper['full name']" :type="field_type" />
      <DashboardInput name="Address" :value="credentialsWrapper['address']" :type="field_type" />
      <DashboardButton content="Save" />
    </form>
  </div>
</template>
<style scoped>
#formWrapper {
  @apply flex flex-col items-center md:items-start mx-3;
}
</style>
