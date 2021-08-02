<template>
  <div class="main text-center flex flex-col items-center justify-center">
    <h1 class="title">Form</h1>
    <h2 class="subtitle">Test</h2>
          <FormulateForm :values="formValues">
        <FormulateInput type="text" name="Elastizität" label="Elastizität" />

        <FormulateInput type="select" :options="['Kg/m3', 'N/mm2']" />

        <FormulateInput type="" name="festigkeit" label="Festigkeit" />
        <FormulateInput type="text" name="druck" label="Druck" />
        <FormulateInput type="text" name="zug" label="Zug" />
        <FormulateInput type="text" name="biege" label="Biege" />
        <FormulateInput type="text" name="brinellehärte" label="Brinellehärte" />
        <FormulateInput type="text" name="nachgiebigkeit-duktillität" label="Nachgiebigkeit-Duktillität" />
        <FormulateInput type="text" name="sprödigkeit" label="Sprödigkeit" />
      </FormulateForm>
  </div>
</template>




<script>
export default {
  data () {
    return {
      formValues: {
        Dichte: 'k/mg³',
        Elastizität: 'N/mm2'
      }
    }
  }
}
</script>