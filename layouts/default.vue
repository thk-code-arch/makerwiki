<template>
  <div class="container">
    <Header />
    <ColorModePicker />
    <nuxt />
  </div>
</template>

<script>
import Header from '~/components/general/Header.vue'
import ColorModePicker from '~/components/general/ColorModePicker.vue'

export default {
  components: {
    Header,
    ColorModePicker,
  },
  mounted() {
    if (process.client) {
      const savedData = localStorage.getItem('user')
      if (savedData) {
        this.$store.commit('auth/loginSuccess')
      }
      this.$store.dispatch('data/getMaterials')
      this.$store.dispatch('data/getCategories')
      this.$store.dispatch('data/getProcesses')
      this.$store.dispatch('data/getUsers')
    }
  },
}
</script>
