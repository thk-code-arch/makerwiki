<template>
  <main v-if="materialPosts" class="main">
    <h1 class="title text-left">materials</h1>
    <ul v-for="(materialPost, index) in materialPosts" :key="index" class="articles">
      <nuxt-link class="article article--clickable" :to="`material/${materialPost.slug}`">
        <h3 class="article-title">{{ materialPost.name }}</h3>
      </nuxt-link>
    </ul>
  </main>
</template>
<script>
export default {
  computed: {
    materialPosts() {
      return this.$store.state.materialPosts
    },
  },
}
</script>
