<template>
  <main v-if="materialPosts" class="main ">
    <Popup v-show="showPopup" />
    <h1 class="title text-left">materials</h1>
    <div class=" flex flex-wrap">
      <div
        v-for="(materialPost, index) in materialPosts"
        :key="index"
        class="text-left flex lg:w-1/3 p-4 rounded-lg w-full"
      >
        <nuxt-link
          class="max-w-5xl mx-auto px-4 py-2 rounded border border-solid border-primary"
          :to="`material/${materialPost.id}`"
        >
          <img :src="`/api/${materialPost.material.bilder}`" />
          <h3 class="article-title">{{ materialPost.material.ueberschrift }}</h3>
          <p>
            {{ materialPost.material.kategorie.gruppe }} - {{ materialPost.material.kategorie.unterGruppe }} -
            {{ materialPost.material.kategorie.art }}
          </p>
        </nuxt-link>
      </div>
    </div>
  </main>
</template>
<script>
import Popup from '~/components/Popup.vue'
export default {
  async asyncData({ $axios }) {
    const materialData = await $axios.$get('api/materials')
    console.log(materialData)
    const materialPosts = []
    for (const material of materialData) {
      materialPosts.push({ id: material._id, material: JSON.parse(material.materialData) })
    }
    return { materialPosts }
  },
  components: { Popup },
  data() {
    return {
      showPopup: true
    }
  }
}
</script>
