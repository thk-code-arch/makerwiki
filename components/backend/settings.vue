<template>
  <div>heloo sir</div>
</template>

<script>
export default {
  name: 'settings',
  async asyncdata({ $axios }) {
    const resp = await $axios.$get('api/profile')
    console.log(resp.data)
    return { resp }
  },
}
</script>
