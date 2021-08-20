<template>
  <main v-if="materialPosts" class="main">
    <h1 class="title text-left">materials</h1>
    <ul v-for="(materialPost, index) in materialPosts" :key="index" class="articles">
      <nuxt-link class="article article--clickable" :to="`material/${materialPost.id}`">
        <h3 class="article-title">{{ materialPost.material.kategorie.art }}</h3>
        <p>{{ materialPost.material.kategorie.gruppe }}</p>
      </nuxt-link>
    </ul>
    {{ materialPosts }}
  </main>
</template>
<script>
export default {
  async asyncData({ $axios }) {
    const materialData = await $axios.$get('api/materials')
    console.log(materialData)
    const materialPosts = []
    for (const material of materialData) {
      materialPosts.push({ id: material._id, material: JSON.parse(material.materialData) })
    }
    return { materialPosts }
  }
}
</script>
