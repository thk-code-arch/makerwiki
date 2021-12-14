<template>
  <div>
    <FormulateInput type="group" name="mechanischeEigenschaften" :repeatable="false">
      <h2 class="subtitle">Mechanische Eigenschaften</h2>
      <FormulateInput type="group" name="dichte" :repeatable="false">
        <FormulateInput
          type="number"
          v-if="showForm(materialData.mechanischeEigenschaften.dichte.min)"
          name="min"
          label="min Dichte"
          :disabled="!isLoggedin"
          v-model="materialData.mechanischeEigenschaften.dichte.min"
        />
        <FormulateInput
          type="number"
          v-if="showForm(materialData.mechanischeEigenschaften.dichte.max)"
          name="max"
          label="max Dichte"
          :disabled="!isLoggedin"
          v-model="materialData.mechanischeEigenschaften.dichte.max"
        />
        <FormulateInput
          type="select"
          v-if="showForm(materialData.mechanischeEigenschaften.dichte.einheit)"
          name="dichteEinheit"
          label="Einheit"
          :options="einheiten"
          :disabled="!isLoggedin"
          v-model="materialData.mechanischeEigenschaften.dichte.einheit"
        />
      </FormulateInput>
      <FormulateInput type="group" name="elastizitaet" :repeatable="false">
        <FormulateInput
          type="number"
          v-if="showForm(materialData.mechanischeEigenschaften.elastizitaet.min)"
          name="min"
          label="min Elastizität"
          :disabled="!isLoggedin"
          v-model="materialData.mechanischeEigenschaften.elastizitaet.min"
        />
        <FormulateInput
          type="number"
          v-if="showForm(materialData.mechanischeEigenschaften.elastizitaet.max)"
          name="max"
          label="max Elastizität"
          :disabled="!isLoggedin"
          v-model="materialData.mechanischeEigenschaften.elastizitaet.max"
        />
        <FormulateInput
          type="select"
          v-if="showForm(materialData.mechanischeEigenschaften.elastizitaet.einheit)"
          name="elastizitaetEinheit"
          label="Einheit"
          :options="einheiten"
          :disabled="!isLoggedin"
          v-model="materialData.mechanischeEigenschaften.elastizitaet.einheit"
        />
      </FormulateInput>
    </FormulateInput>
  </div>
</template>
<script>
export default {
  name: 'MechProperties',
  props: ['einheiten', 'selectedMechprops'],
  computed: {
    isLoggedin() {
      return this.$store.state.auth.loggedIn
    },
  },
  data() {
    return {
      materialData: {
        mechanischeEigenschaften: {
          dichte: { min: '', max: '', einheit: '' },
          elastizitaet: { min: '', max: '', einheit: '' },
          ...this.selectedMechprops,
        },
      },
    }
  },
  methods: {
    showForm(vModel) {
      if (this.$store.state.auth.loggedIn) {
        return true
      }
      if (vModel) {
        return true
      }
      return false
    },
  },
}
</script>
