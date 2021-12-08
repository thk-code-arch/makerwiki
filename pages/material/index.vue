<template>
  <main v-if="materialPosts" class="main">
    <h1 class="title text-left">materials</h1>
    <div class="flex flex-wrap">
      <div
        v-for="(materialPost, index) in materialPosts"
        :key="index"
        class="text-left flex lg:w-1/3 p-4 rounded-lg w-full"
      >
        <nuxt-link
          class="max-w-5xl mx-auto px-4 py-2 rounded border border-solid border-primary"
          :to="`material/${materialPost.id}`"
        >
          <img :src="`/api${materialPost.materialData.bilder}`" />
          <h3 class="subtitle">{{ materialPost.materialData.ueberschrift }}</h3>
          <p>
            {{ categoryName(materialPost.materialData.kategorie.gruppe) }} -
            {{ categoryName(materialPost.materialData.kategorie.unterGruppe) }} -
            {{ categoryName(materialPost.materialData.kategorie.art) }}
          </p>
        </nuxt-link>
      </div>
    </div>
    <div class="cursor-pointer" v-on:click="downloadJSON">Download JSON</div>
  </main>
</template>
<script>
import download from 'downloadjs'

export default {
  computed: {
    materialPosts() {
      return this.$store.state.data.materials
    },
  },
  mounted() {
    this.$store.dispatch('data/getMaterials')
  },

  data() {
    return {}
  },
  methods: {
    categoryName(id) {
      return this.$store.getters['data/getCategoryById'](id)?.name
    },
    downloadJSON() {
      download(JSON.stringify(this.materialPosts), 'materials.json', 'text/plain')
    },
  },
}
</script>
