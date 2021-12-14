
<template>
  <div>
    <FormulateForm>
      {{ parent }} Add new {{ ebene }}
      <FormulateInput type="text" name="" label="" validation="required" v-model="name" />
      <FormulateInput type="button" label="Create Category" @click="createCat()" />
    </FormulateForm>
  </div>
</template>
<script>
export default {
  name: 'AddCategory',
  props: ['ebene', 'parent', 'categoryType'],
  data() {
    return {
      name: '',
    }
  },
  methods: {
    async createCat() {
      console.log('created')
      await this.$axios.$post('api/materials/category', {
        ebene: this.ebene,
        parent: this.parent,
        name: this.name,
        categoryType: this.categoryType,
      })

      this.$emit('addedCat')
      this.$store.dispatch('data/getCategories')
    },
  },
}
</script>