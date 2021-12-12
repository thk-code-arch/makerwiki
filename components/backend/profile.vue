<template>
  <div>
    <div class="title">Hi {{ username }}!</div>
    <span class="uppercase font-bold">your latest</span>
    <div v-if="latestMaterials">
      <li v-for="(m, index) in latestMaterials" :key="index" class="m-2">
        <nuxt-link :to="`/material/${m.id}`">
          {{ m.materialData.ueberschrift }}
        </nuxt-link>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: 'profile',
  computed: {
    username() {
      return this.$store.state.auth.username
    },
    latestMaterials() {
      return this.$store.getters['data/getMaterialCreatedByUserId'](this.$store.state.auth.userId)
    },
  },
  mounted() {
    this.$store.dispatch('auth/getProfile')
  },
}
</script>
