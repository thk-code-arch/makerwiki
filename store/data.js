export const state = () => ({
  materials: [],
  processes: [],
  categories: []
})

export const mutations = {
  SET_MATERIALS(state, materials) {
    state.materials = materials
  },
  SET_PROCESSES(state, processes) {
    state.processes = processes
  },
  SET_CATEGORIES(state, categories) {
    state.categories = categories
  }
}
export const actions = {
  getMaterials({ commit }) {
    this.$axios.$get('api/materials').then(response => {
      const materialPosts = []
      for (const material of response) {
        materialPosts.push({ id: material._id, material: JSON.parse(material.materialData) })
      }
      commit('SET_MATERIALS', materialPosts)
    })
  },
  getProcesses({ commit }) {
    this.$axios.$get('api/processes').then(response => {
      const materialPosts = []
      for (const material of response) {
        materialPosts.push({ id: material._id, material: JSON.parse(material.materialData) })
      }
      commit('SET_PROCESSES', materialPosts)
    })
  },
  getCategories({ commit }) {
    this.$axios.$get('api/materials/category').then(response => {
      commit('SET_CATEGORIES', response)
    })
  }
}
