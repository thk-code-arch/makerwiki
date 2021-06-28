<template>
  <article v-if="processPost" class="main article">
    <h1 class="article-title">{{ processPost.title }}</h1>
    <p class="mt-4">{{ processPost.description }}</p>
    <img class="cover-image" :src="processPost.cover" />
    <div class="block mt-8 mb-4" v-html="$md.render(processPost.body)" />
    <div v-if="processPost.gallery">
      <img v-for="image in processPost.gallery" class="image" :key="image.id" :src="image" />
    </div>
  </article>
</template>
<script>
export default {
  async asyncData({ params, payload }) {
    if (payload) return { processPost: payload }
    else
      return {
        processPost: await require(`~/assets/content/process/${params.process}.json`),
      }
  },
}
</script>
