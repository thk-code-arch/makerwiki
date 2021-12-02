<!-- // Copyright (c) 2021 Steffen Stein <mail@steffenstein.com> For LICENSE see docs/LICENSE -->

<template>
  <div class="flex flex-col px-8 pt-6 pb-8 mb-4 ">
    <p class="text-codearch-500">{{ useraction }}</p>
    <FormulateForm v-if="!login" @submit="handleRegister">
      <FormulateInput
        type="text"
        name="username"
        v-model="user.username"
        label="Username"
        validation="required"
      />
      <FormulateInput
        type="text"
        name="email"
        v-model="user.email"
        label="Email"
        validation="required"
      />
      <FormulateInput
  type="password"
  name="password"
  label="Password"
        v-model="user.password"
  validation="required|min:4,length"
  validation-name="Password"
/>
      <FormulateInput
        type="text"
        name="invitecode"
        v-model="user.invitecode"
        label="Invite Code"
        validation="required"
      />
      <FormulateInput label="Register" type="submit" />
    </FormulateForm>
    <p>{{ message.message }}</p>
  </div>
</template>

<script>
import User from "@/models/user";

export default {
  name: "Register",
  data() {
    return {
      user: new User("", "", ""),
      loading: false,
      message: "",
      useraction: "",
      login: false,
    };
  },
  methods: {
    handleRegister() {
      this.message = "";
      this.submitted = true;
      this.$store.dispatch("auth/register", this.user).then(
        (data) => {
          this.message = data.message;
          this.successful = true;
          this.login = true;
          this.useraction = "Registered. Login now!";
        },
        (error) => {
          this.message =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
          this.successful = false;
        }
      );
    },
  },
};
</script>
