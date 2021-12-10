<template>
  <div>
    <div>
      <h2 class="subtitle">Kategorie</h2>
      <FormulateInput type="group" name="kategorie" :repeatable="false">
        <div class="flex items-center">
          <FormulateInput
            type="select"
            name="gruppe"
            label="Gruppe"
            :options="kategorie.gruppe"
            v-model="materialData.kategorie.gruppe"
          />
          <button
            class="
              bg-retro-mediumpurple
              hover:bg-retro-black
              text-white
              font-bold
              py-2
              px-4
              border-b-4 border-retro-Deeppurple
              hover:border-black
              rounded
            "
          >
            +
          </button>
          <FormulateInput
            type="select"
            name="unterGruppe"
            label="Untergruppe"
            :options="kategorie.unterGruppe"
            v-model="materialData.kategorie.unterGruppe"
          />
          <button
            class="
              bg-retro-mediumpurple
              hover:bg-retro-black
              text-white
              font-bold
              py-2
              px-4
              border-b-4 border-retro-Deeppurple
              hover:border-black
              rounded
            "
          >
            +
          </button>
          <FormulateInput
            type="select"
            name="art"
            label="Art"
            :options="kategorie.art"
            v-model="materialData.kategorie.art"
          />
          <button
            class="
              bg-retro-mediumpurple
              hover:bg-retro-black
              text-white
              font-bold
              py-2
              px-4
              border-b-4 border-retro-Deeppurple
              hover:border-black
              rounded
            "
          >
            +
          </button>
        </div>
      </FormulateInput>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Categories',
  props: ['categoryData', 'selectedCategories'],
  data() {
    return {
      materialData: {
        kategorie: { gruppe: '', unterGruppe: '', art: '', ...this.selectedCategories },
      },
    }
  },

  computed: {
    kategorie() {
      const kat = {
        gruppe: this.categoryData.map((g) => {
          return {
            label: g.label,
            value: g.value,
          }
        }),
        unterGruppe: this.materialData.kategorie.gruppe
          ? this.categoryData.find((x) => x.value === this.materialData.kategorie.gruppe)?.untergruppe
          : '',

        art: this.materialData.kategorie.unterGruppe
          ? this.categoryData
              .find((x) => x.value === this.materialData.kategorie.gruppe)
              .untergruppe.find((x) => x.value === this.materialData.kategorie.unterGruppe)?.art
          : '',
      }

      this.$emit('changeCategories', this.materialData.kategorie)
      return kat
    },
  },
}
</script>
