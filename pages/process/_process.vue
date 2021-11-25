<template>
  <article v-if="processPost" class="main article">
    <h1 class="article-title">{{ processPost.name }}</h1>
    <p class="mt-4">{{ processPost.shortDescription }}</p>
    <img class="cover-image" :src="processPost.image" />
    <div class="block mt-8 mb-4" v-html="$md.render(processPost.mdDescription)" />
  </article>
</template>
<script>
export default {
}
</script>
