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
  async asyncData({ $axios, params }) {
    console.log(params)
    const materialData = await $axios.$get('api/materials/get', {}, { id: params.material })
    console.log(materialData.data)
    const materialPost = materialData
    return { materialPost }
  }
}
</script>
