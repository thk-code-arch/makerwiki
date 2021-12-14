<template>
  <article v-if="materialPost" class="main article">
    <h1 class="article-title">{{ materialPost.materialData.ueberschrift }}</h1>
    <h1 class="description">
      {{ categoryName(materialPost.materialData.kategorie.gruppe) }} -
      {{ categoryName(materialPost.materialData.kategorie.unterGruppe) }} -
      {{ categoryName(materialPost.materialData.kategorie.art) }}
    </h1>

    <div v-if="latestProcesses" class="m-6">
      <span class="uppercase font-bold">process</span>
      <li v-for="(p, index) in latestProcesses" :key="index" class="m-2">
        <nuxt-link :to="`/process/${p.id}`">
          {{ categoryName(p.processData.kategorie.gruppe) }} - {{ categoryName(p.processData.kategorie.unterGruppe) }} -
          {{ categoryName(p.processData.kategorie.art) }}
          {{ p.createdAt }}
        </nuxt-link>
      </li>
    </div>
    <img class="cover-image" :src="'/api' + materialPost.materialData.bilder" />
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
      return { ...this.$store.getters['data/getMaterialById'](this.$route.params.material) }
    },
    latestProcesses() {
      return this.$store.getters['data/getProcessByMaterialId'](this.$route.params.material)
    },
  },
  methods: {
    categoryName(id) {
      return this.$store.getters['data/getCategoryById'](id)?.name
    },
  },
}
</script>
