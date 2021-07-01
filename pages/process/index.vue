<template>
  <main v-if="processPosts" class="main">
    <h1 class="title text-left">process</h1>
    <ul v-for="(processPost, index) in processPosts" :key="index" class="articles">
      <nuxt-link class="article article--clickable" :to="`process/${processPost.slug}`">
        <h3 class="article-title">{{ processPost.name }}</h3>
      </nuxt-link>
    </ul>
  </main>
</template>
<script>
export default {
  computed: {
    processPosts() {
      return this.$store.state.processPosts
    },
  },
}
</script>
