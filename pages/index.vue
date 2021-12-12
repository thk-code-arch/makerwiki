<template>
  <div class="main text-center flex flex-col items-center justify-center">
    <h1 class="title">MakerWiki</h1>
    <h2 class="subtitle">Prototype</h2>
    <div class="flex flex-col w-full items-center justify-center">
      <span class="uppercase font-bold">contributors</span>
      <span v-for="(usr, index) in topUsers" :key="index" class="m-2">
        {{ usr.username }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {}
  },
  computed: {
    topUsers() {
      return this.$store.getters['data/getUsersAndData']
        .filter((c) => c.count > 0)
        .map((u) => {
          return { username: u.username, count: u.count }
        })
        .sort((a, b) => b.count - a.count)
    },
  },
}
</script>
