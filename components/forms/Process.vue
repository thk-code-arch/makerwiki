<template>
  <div class="main text-center flex flex-col flow-root">
    <h1 class="title">Formular</h1>
    <h2 class="subtitle">Process Formular</h2>

    <FormulateForm v-model="processData">
      <FormulateInput type="group" name="versuch" :repeatable="true">
        <h2 class="subtitle">Versuch {{ versuchAnzahl }}</h2>
        <h2 class="subtitle">Raster</h2>

        <FormulateInput type="number" name="raster.power" label="Power" placeholder="In %" />
        <FormulateInput type="number" name="raster.frequenz" label="Frequenz" placeholder="In %" />
        <FormulateInput type="number" name="raster.speed" label="Speed" placeholder="In %" />

        <h2 class="subtitle">Schnitt</h2>
        <FormulateInput type="number" name="schnitt.power" label="Power" placeholder="In %" />
        <FormulateInput type="number" name="schnitt.frequenz" label="Frequenz" placeholder="In %" />
        <FormulateInput type="number" name="schnitt.speed" label="Speed" placeholder="In %" />
      </FormulateInput>

      <FormulateInput type="button" label="Save" class="main text-center flex flex-col flow-root" />
    </FormulateForm>
    <div>
      {{ processData }}
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    versuchAnzahl() {
      if (this.processData.versuch) {
        console.log(this.processData.versuch)
        return this.processData.versuch.length
      }
      return 1
    }
  },
  data() {
    return {
      processData: {
        versuch: []
      }
    }
  }
}
</script>
