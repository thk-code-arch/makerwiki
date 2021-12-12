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
            @click="newCategory('gruppe')"
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
            v-if="materialData.kategorie.gruppe"
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
            @click="newCategory('untergruppe')"
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
            v-if="materialData.kategorie.unterGruppe"
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
            @click="newCategory('art')"
          >
            +
          </button>
        </div>
      </FormulateInput>
    </div>
    <AddCategory v-if="showAddCat" @addedCat="addedCat()" :ebene="ebene" :parent="parent" />
  </div>
</template>
<script>
import AddCategory from '~/components/forms/AddCategory'
export default {
  name: 'Categories',
  props: ['categoryData', 'selectedCategories'],
  components: { AddCategory },
  data() {
    return {
      materialData: {
        kategorie: { gruppe: '', unterGruppe: '', art: '', ...this.selectedCategories },
      },
      showAddCat: false,
      ebene: '',
    }
  },
  methods: {
    newCategory(ebene) {
      this.showAddCat = !this.showAddCat
      this.ebene = ebene
      if (ebene === 'gruppe') {
        this.parent = ''
      }
      if (ebene === 'untergruppe') {
        this.parent = this.categoryName(this.materialData.kategorie.gruppe)
      }
      if (ebene === 'art') {
        this.parent = this.categoryName(this.materialData.kategorie.unterGruppe)
      }
    },
    categoryName(id) {
      return this.$store.getters['data/getCategoryById'](id)?.name
    },
    addedCat() {
      this.showAddCat = !this.showAddCat
    },
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
