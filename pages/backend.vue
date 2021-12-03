<template>
  <div class="main text-center flex flex-col items-center justify-center">
    <ul class="flex inset-x-0 p-3 text-3xl">
      <li class="flex-1 mr-2">
        <span class="btn block" @click="currentTab = 'profile'">Profile</span>
      </li>
      <li class="flex-1 mr-2 inline-flex items-center btn block">
        <Plus /><span @click="currentTab = 'material'">Material</span>
      </li>
      <li class="flex-1 mr-2 inline-flex items-center btn block">
        <Plus /><span @click="currentTab = 'process'">Process</span>
      </li>
      <li class="flex-1">
        <span class="btn block" @click="currentTab = 'settings'">Settings</span>
      </li>
    </ul>
    <component v-bind:is="currentTab"></component>
  </div>
</template>

<script>
import profile from '~/components/backend/profile.vue'
import settings from '~/components/backend/settings.vue'
import material from '~/components/forms/Material.vue'
import process from '~/components/forms/Process.vue'
import Plus from '~/components/icons/plus.svg?inline'
export default {
  middleware: 'auth',
  components: { profile, material, process, settings, Plus },
  head() {
    return {}
  },
  async asyncdata({ $axios }) {
    const resp = await $axios.$get('api/profile')
    console.log(resp.data)
    return { resp }
  },
  data() {
    return {
      currentTab: 'profile',
      tabs: [
        { name: 'Register', component: 'profile' },
        { name: '+ Material', component: 'material' },
        { name: '+ Process', component: 'process' },
      ],
    }
  },
}
</script>
