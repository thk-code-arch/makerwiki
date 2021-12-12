<template>
  <article v-if="processPost" class="main article">
    <h3 class="article-title">{{ materialName(processPost.processData.materialId) }}</h3>
    <h3 class="">created at: {{ processPost.createdAt }}</h3>
    <h3 class="">created by: {{ username(processPost.createdBy) }}</h3>
    <process :existingprocessData="processPost" />
  </article>
</template>
<script>
import process from '~/components/forms/Process.vue'
export default {
  components: { process },
  mounted() {},
  computed: {
    processPost() {
      return { ...this.$store.getters['data/getProcessById'](this.$route.params.process) }
    },
  },
  methods: {
    username(id) {
      return this.$store.getters['data/getUserById'](id)?.username
    },
    materialName(id) {
      return this.$store.getters['data/getMaterialById'](id)?.materialData.ueberschrift
    },
  },
}
</script>
