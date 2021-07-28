<template>
  <article v-if="materialPost" class="main article">
    <h1 class="article-title">{{ materialPost.kategorisierung }}</h1>

    <img class="cover-image" :src="materialPost.image" />

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
