<template>
  <div class="main text-center flex flex-col items-center justify-center">
      <FormulateForm
    class="login-form"
    v-model="formValues"
  >
    <h2 class="subtitle">Register</h2>
    <p>
      Please register with Invite Code.
    </p>
    <FormulateInput
      name="name"
      type="text"
      label="Your name"
      placeholder="Your name"
      validation="required"
    />
    <FormulateInput
      name="email"
      type="email"
      label="Email address"
      placeholder="Email address"
      validation="required|email"
    />
    <div class="double-wide">
      <FormulateInput
        name="password"
        type="password"
        label="Password"
        placeholder="Your password"
        validation="required"
      />
      <FormulateInput
        name="password_confirm"
        type="password"
        label="Confirm your password"
        placeholder="Confirm password"
        validation="required|confirm"
        validation-name="Confirmation"
      />
    </div>
    <FormulateInput
      type="submit"
      label="Register"
    />
    <pre
      class="code"
      v-text="formValues"
    />
  </FormulateForm>
  </div>
</template>

<script>
export default {
  head() {
    return {
    }
  }
}
</script>
