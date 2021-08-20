<template>
  <div class="main text-center flex flex-col items-center justify-center">
    <h1 class="title">MakerWiki</h1>
    <h2 class="subtitle">Prototype</h2>
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
    }
  }
}
</script>
