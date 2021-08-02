<template>
  <div class="main text-center flex flex-col items-center justify-center">
    <h1 class="title">Formular</h1>
    <h2 class="subtitle">Material Formular</h2>
    <FormulateForm v-model="fields">

      <FormulateInput type="group" name="kategorie" :repeatable="false">
           <FormulateInput type="select" name="gruppe" label="Gruppe" :options="kategorie.gruppe" />
          <FormulateInput type="select" name="unterGruppe" label="Untergruppe" :options="kategorie.unterGruppe" />
          <FormulateInput type="select" name="art" label="Art" :options="kategorie.art" />


      </FormulateInput>
      <FormulateInput type="group" name="mechanischeEigenschaften" :repeatable="false">
        <FormulateInput type="group" name="dichte" :repeatable="false">
          <FormulateInput type="number" name="min" label="min Dichte" />
          <FormulateInput type="number" name="max" label="max Dichte" />
          <FormulateInput type="select" name="dichteEinheit" label="Einheit" :options="einheiten" />

        </FormulateInput>
      </FormulateInput>
    </FormulateForm>
    <div>
      {{ fields }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: {},
      einheiten: {
        kgm3: 'k/mg³',
        nmm2: 'N/mm2'
      },
      kategorie:{gruppe: ["Holz", "Stahl"], unterGruppe: ["Laubholz", "Eisen"], art:["Eiche","Aluminium"]}
    }
  }
}
</script>
