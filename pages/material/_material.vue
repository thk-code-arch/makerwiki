<template>
  <article v-if="materialPost" class="main article">
    <h1 class="article-title">{{ materialPost.kategorisierung }}</h1>
    <p class="mt-4">{{ materialPost.shortDescription }}</p>
    <h1 class="description">{{ materialPost.schwindmaß }}</h1>
    <img class="cover-image" :src="materialPost.image" />
  </article>
</template>
<script>
export default {
  mounted() {},
  computed: {
    materialPost() {
      return this.$store.getters['data/getMaterialById'](this.$route.params.material)?.material
    },
  },
}
</script>
