<template>
  <main v-if="processPosts" class="main">
    <h1 class="title text-left">process</h1>
    <ul v-for="(processPost, index) in processPosts" :key="index" class="articles">
      <nuxt-link class="article article--clickable" :to="`process/${processPost.slug}`">
        <h3 class="article-title">{{ processPost.title }}</h3>
        <div class="mt-4 mb-2">
          <h2 class="inline py-1 px-2 mr-1 bg-accent text-white font-medium rounded-sm dark:bg-accent">
            {{ processPost.process_type }}
          </h2>
          <p class="inline">{{ processPost.description }}</p>
        </div>
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
