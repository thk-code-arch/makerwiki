<template>
  <div class="title">Hi {{ username }}!</div>
</template>

<script>
export default {
  name: 'profile',
  computed: {
    username() {
      return this.$store.state.auth.username
    },
  },
  mounted() {
    this.$store.dispatch('auth/getProfile')
  },
}
</script>
