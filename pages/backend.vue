<template>
  <div class="main text-center flex flex-col items-center justify-center">
    <ul class="flex inset-x-0 p-3 text-3xl">
      <li class="flex-1 mr-2">
        <nuxt-link class="btn block" to="/">+Material</nuxt-link>
      </li>
      <li class="flex-1 mr-2">
        <nuxt-link class="btn block" to="/material">+Process</nuxt-link>
      </li>
      <li class="flex-1">
        <nuxt-link class="btn block" to="/process">Settings</nuxt-link>
      </li>
    </ul>
    <profile />
  </div>
</template>

<script>
import profile from '~/components/settings/profile.vue'
import material from '~/components/forms/Material.vue'
import process from '~/components/forms/Process.vue'
export default {
  middleware: 'auth',
  components: { profile, material, process },
  head() {
    return {}
  },
  async asyncdata({ $axios }) {
    const resp = await $axios.$get('api/profile')
    console.log(resp.data)
    return { resp }
  },
}
</script>
