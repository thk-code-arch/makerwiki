<template>
  <div class="fixed bottom-0 left-0 m-3">
    <div class="flex flex-row space-x-2">
      <component :is="`icon-${color}`" @click="changeColorMode" title="Toggle background color" class="p-2" />
      <nuxt-link to="/backend">
        <Settings class="icon p-2" />
      </nuxt-link>
      <Logout @click="logOut" v-if="isLoggedin" class="icon p-2" />
    </div>
  </div>
</template>

<script>
import { COLOR_MODE_FALLBACK } from '~/utils/globals.js'
import IconSystem from '~/components/icons/system.svg?inline'
import IconLight from '~/components/icons/light.svg?inline'
import IconDark from '~/components/icons/dark.svg?inline'
import Settings from '~/components/icons/settings.svg?inline'
import Logout from '~/components/icons/logout.svg?inline'

export default {
  name: 'ColorModePicker',
  components: {
    IconSystem,
    IconLight,
    IconDark,
    Settings,
    Logout,
  },
  data() {
    return {
      color: COLOR_MODE_FALLBACK,
    }
  },
  computed: {
    isLoggedin() {
      return this.$store.state.auth.loggedIn
    },
  },
  watch: {
    '$colorMode.value': {
      immediate: true,
      handler(val) {
        if (!this.$colorMode.unknown) {
          this.color =
            this.$colorMode && this.$colorMode.preference != null && this.$colorMode.preference !== 'null'
              ? this.$colorMode.preference
              : COLOR_MODE_FALLBACK
        } else {
          this.color = COLOR_MODE_FALLBACK
        }
      },
    },
  },
  methods: {
    changeColorMode() {
      if (this.$colorMode.unknown) return (this.$colorMode.preference = COLOR_MODE_FALLBACK)

      switch (this.$colorMode.preference) {
        case 'light':
          return (this.$colorMode.preference = 'dark')
        case 'dark':
          return (this.$colorMode.preference = 'light')
        case 'system':
          return (this.$colorMode.preference = this.$colorMode.value === 'dark' ? 'light' : 'dark')

        default:
          return (this.$colorMode.preference = COLOR_MODE_FALLBACK)
      }
    },
    logOut() {
      this.$store.dispatch('auth/logout')
      this.$router.push('/login')
    },
  },
}
</script>

<style lang="postcss" scoped>
.icon {
  width: 44px;
  height: 44px;
}
</style>
