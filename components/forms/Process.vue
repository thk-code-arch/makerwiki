<template>
  <div class="main text-center flex flex-col flow-root">
    <div v-if="isLoggedin">
      <h1 class="title">Formular</h1>
      <h2 class="subtitle">Process Formular</h2>
    </div>

    <FormulateForm>
      <FormulateInput
        type="select"
        label="Material select"
        :options="materialList"
        v-model="processData.materialId"
        :disabled="!isLoggedin"
        validation="required"
      />
      <Categories
        v-if="isLoggedin"
        :categoryData="categoryData"
        :selectedCategories="processData.kategorie"
        categoryType="process"
        @changeCategories="ChangeC($event)"
      />
      <FormulateInput type="group" name="versuch" :repeatable="true" v-model="processData.versuch">
        <h2 class="subtitle">Versuch {{ versuchAnzahl }}</h2>
        <h2 class="subtitle">Raster</h2>

        <FormulateInput type="number" :disabled="!isLoggedin" name="rasterPower" label="Power" placeholder="In %" />
        <FormulateInput
          type="number"
          :disabled="!isLoggedin"
          name="rasterFrequenz"
          label="Frequenz"
          placeholder="In %"
        />
        <FormulateInput type="number" :disabled="!isLoggedin" name="rasterSpeed" label="Speed" placeholder="In %" />

        <h2 class="subtitle">Schnitt</h2>
        <FormulateInput type="number" :disabled="!isLoggedin" name="schnittPower" label="Power" placeholder="In %" />
        <FormulateInput
          type="number"
          :disabled="!isLoggedin"
          name="schnittFrequenz"
          label="Frequenz"
          placeholder="In %"
        />
        <FormulateInput type="number" :disabled="!isLoggedin" name="schnittSpeed" label="Speed" placeholder="In %" />
      </FormulateInput>

      <FormulateInput v-if="isNew" type="button" label="Save" @click="createProcess()" />
      <FormulateInput v-if="!isNew && isLoggedin" type="button" label="Update" @click="updateProcess()" />
      <FormulateInput v-if="!isNew && isLoggedin" type="button" label="Delete" @click="deleteProcess()" />
    </FormulateForm>
    <div></div>
  </div>
</template>
<script>
import Categories from '~/components/forms/Categories'
export default {
  props: ['existingprocessData'],
  components: {
    Categories,
  },
  computed: {
    versuchAnzahl() {
      if (this.processData.versuch) {
        console.log(this.processData.versuch)
        return this.processData.versuch.length
      }
      return 1
    },
    materialList() {
      return this.$store.getters['data/getMaterialNameList']
    },
    isLoggedin() {
      return this.$store.state.auth.loggedIn
    },
    isNew() {
      return this.existingprocessData?.id ? false : true
    },
    categoryData() {
      return this.$store.getters['data/sortedCategories']('process')
    },
  },
  data() {
    return {
      processData: {
        materialId: '',
        kategorie: { gruppe: '', unterGruppe: '', art: '' },
        versuch: [],
        ...this.existingprocessData?.processData,
      },
    }
  },
  methods: {
    async createProcess() {
      console.log('created')
      await this.$axios.$post('api/processes', { processData: this.processData })
      this.$router.push({ path: '/process' })
    },
    async updateProcess() {
      console.log('updated')
      await this.$axios.$post('api/processes/update', {
        id: this.existingprocessData?.id,
        processData: this.processData,
      })
      this.$router.push({ path: '/process' })
    },
    async deleteProcess() {
      if (confirm('Do you really want to delete?')) {
        console.log('deleted')
        await this.$axios.$post('api/processes/delete', { id: this.existingprocessData?.id })
        this.$router.push({ path: '/process' })
      }
    },
    ChangeC(categories) {
      console.log('emited', categories)
      this.processData.kategorie = categories
    },
  },
}
</script>
