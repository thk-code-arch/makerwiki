<template>
  <main v-if="materialPosts" class="main">
    <h1 class="title text-left">materials</h1>
    <ul v-for="(materialPost, index) in materialPosts" :key="index" class="articles">
      <nuxt-link class="article article--clickable" :to="`materials/${materialPost.slug}`">
        <h3 class="article-title">{{ materialPost.title }}</h3>
        <div class="mt-4 mb-2">
          <h2 class="inline py-1 px-2 mr-1 bg-accent text-white font-medium rounded-sm dark:bg-accent">
            {{ materialPost.material_type }}
          </h2>
          <p class="inline">{{ materialPost.description }}</p>
        </div>
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
