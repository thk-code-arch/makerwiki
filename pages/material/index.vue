<template>
  <main v-if="materialPosts" class="main">
    <h1 class="title text-left">materials</h1>
    <ul v-for="(materialPost, index) in materialPosts" :key="index" class="articles">
      <nuxt-link class="article article--clickable" :to="`material/${materialPost.slug}`">
        <h3 class="article-title">{{ materialPost.kategorie.art }}</h3>
        <p>{{ materialPost.kategorie.gruppe }}</p>
      </nuxt-link>
    </ul>
  </main>
</template>
<script>
export default {
  async asyncData({ $axios }) {
    const materialData = await $axios.$get('api/materials')
    const materialPosts = []
    for (const material of materialData) {
      materialPosts.push(JSON.parse(material.materialData))
    }
    return { materialPosts }
  }
}
</script>
