<template>
  <div class="main text-center flex flex-col items-center justify-center">
    <h1 class="title">Formular</h1>
    <h2 class="subtitle">Material Formular</h2>

      <FormulateInput
      type="image"
      name="headshot"
      label="Wählen Sie ein Bild zum Hochladen aus"
      help="Wählen Sie ein PNG, JPG oder GIF zum Hochladen aus."
      validation="mime:image/jpeg,image/png,image/gif"
    />
      />
      <FormulateInput
       type="group"
       :repeatable="false"
       name="Mechanische Eigenschaften"
>
  <FormulateInput
    name="dichte"
    label="Dichte"
  />
  <FormulateInput
    name="elastizität"
    label="Elastizität"
  />
</FormulateInput>
    <div>
{{formValues}}

    </div>
  </div>
</template>

<
<template>
  <FormulateForm
    :values="formValues"
  >
    <FormulateInput
      type="text"
      name="Dichte"
      label="Dichte"
    />
    <FormulateInput
      type="select"
      :options="['Kg/m3', 'N/mm2']"
    />
    <FormulateInput
      type="text"
      name="Elastizität"
      label="Elastizität"
    />

    <FormulateInput
      type="select"
      :options="['Kg/m3', 'N/mm2']"
    />

    
    <FormulateInput
      type=""
      name="festigkeit"
      label="Festigkeit"
    />
      <FormulateInput
      type="text"
      name="druck"
      label="Druck"
    />
      <FormulateInput
      type="text"
      name="zug"
      label="Zug"
    />
      <FormulateInput
      type="text"
      name="biege"
      label="Biege"
    />
      <FormulateInput
      type="text"
      name="brinellehärte"
      label="Brinellehärte"
    />
      <FormulateInput
      type="text"
      name="nachgiebigkeit-duktillität"
      label="Nachgiebigkeit-Duktillität"
    />
        <FormulateInput
      type="text"
      name="sprödigkeit"
      label="Sprödigkeit"
    />


  </FormulateForm>
  
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