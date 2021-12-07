<template>
  <article v-if="materialPost" class="main article">
    <h1 class="article-title">{{ materialPost.material.ueberschrift }}</h1>
    <h1 class="description">
      {{ categoryName(materialPost.material.kategorie.gruppe) }} -
      {{ categoryName(materialPost.material.kategorie.unterGruppe) }} -
      {{ categoryName(materialPost.material.kategorie.art) }}
    </h1>
    <img class="cover-image" :src="'/api' + materialPost.material.bilder" />
    <material :existingmaterialData="materialPost" />
  </article>
</template>
<script>
import material from '~/components/forms/Material.vue'
export default {
  components: { material },
  mounted() {},
  computed: {
    materialPost() {
      return this.$store.getters['data/getMaterialById'](this.$route.params.material)
    },
  },
  methods: {
    categoryName(id) {
      return this.$store.getters['data/getCategoryById'](id)?.name
    },
  },
}
</script>
