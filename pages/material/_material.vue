<template>
  <article v-if="materialPost" class="main article">
    <h1 class="article-title">{{ materialPost.name }}</h1>
    <p class="mt-4">{{ materialPost.shortDescription }}</p>
    <img class="cover-image" :src="materialPost.image" />
    <div class="block mt-8 mb-4" v-html="$md.render(materialPost.mdDescription)" />
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
