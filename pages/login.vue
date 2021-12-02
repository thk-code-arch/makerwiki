<template>
  <div class="main text-center flex flex-col items-center justify-center">
    <component v-bind:is="currentTabComponent"></component>
    <div v-for="tab in tabs" v-bind:key="tab">
      <button v-if="currentTab != tab.component" v-on:click="currentTab = tab.component" class="p-4 white">
        {{ tab.name }}
      </button>
    </div>
  </div>
</template>

<script>
import SignIn from '~/components/auth/Signin'
import Register from '~/components/auth/register'
export default {
  components: { SignIn, Register },
  data() {
    return {
      currentTab: 'SignIn',
      tabs: [
        { name: 'Register', component: 'Register' },
        { name: 'Login', component: 'SignIn' },
      ],
    }
  },

  computed: {
    currentTabComponent: function () {
      return this.currentTab
    },
  },
}
</script>
