<template>
  <main v-if="processPosts" class="main">
    <h1 class="title text-left">process</h1>
    <div class="flex flex-wrap">
      <div v-for="(processPost, index) in processPosts" :key="index" class="text-left flex p-4 rounded-lg w-full">
        <nuxt-link
          class="w-full mx-auto px-4 py-2 rounded border border-solid border-primary"
          :to="`process/${processPost.id}`"
        >
          <h3 class="subtitle">{{ materialName(processPost.processData.materialId) }}</h3>
          <h3 class="">created at: {{ processPost.createdAt }}</h3>
          <h3 class="">created by: {{ username(processPost.createdBy) }}</h3>
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
    processPosts() {
      return this.$store.state.data.processes
    },
  },
  mounted() {
    this.$store.dispatch('data/getProcesses')
  },
  methods: {
    username(id) {
      return this.$store.getters['data/getUserById'](id)?.username
    },
    materialName(id) {
      return this.$store.getters['data/getMaterialById'](id)?.materialData.ueberschrift
    },
    downloadJSON() {
      download(JSON.stringify(this.processPosts), 'processes.json', 'txt/plain')
    },
  },
}
</script>
