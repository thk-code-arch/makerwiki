<template>
  <article v-if="materialPost" class="main article">
    <h1 class="article-title">{{ materialPost.title }}</h1>
    <p class="mt-4">{{ materialPost.description }}</p>
    <img class="cover-image" :src="materialPost.cover" />
    <div class="block mt-8 mb-4" v-html="$md.render(materialPost.body)" />
    <div v-if="materialPost.gallery">
      <img v-for="image in materialPost.gallery" class="image" :key="image.id" :src="image" />
    </div>
  </article>
</template>
<script>
export default {
  async asyncData({ params, payload }) {
    if (payload) return { materialPost: payload }
    else
      return {
        materialPost: await require(`~/assets/content/material/${params.material}.json`),
      }
  },
}
</script>
