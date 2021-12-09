export const state = () => ({
  materials: [],
  processes: [],
  categories: []
})

export const getters = {

  getMaterialById: (state) => (id) => {
    return state.materials.find(material => material.id === id)
  },
  getCategoryById: (state) => (id) => {
    return state.categories.find(cat => cat._id === id)
  },
  sortedCategories: (state) => {
    const all = state.categories
    const gruppe = all.filter((p) => p.ebene === 'gruppe');
    const untergruppe = all.filter((p) => p.ebene === 'untergruppe');
    const art = all.filter((p) => p.ebene === 'art');

    return gruppe.map((g) => {
      return {
        value: g._id,
        label: g.name,
        untergruppe: untergruppe
          .filter((ug) => ug.parent === g.name)
          .map((ug) => {
            return {
              value: ug._id,
              label: ug.name,
              art: art
                .filter((art) => art.parent === ug.name)
                .map((art) => {
                  return {
                    value: art._id,
                    label: art.name,
                  };
                }),
            };
          }),
      };
    });
  }


}
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
      commit('SET_MATERIALS', response)
    })
  },
  getProcesses({ commit }) {
    this.$axios.$get('api/processes').then(response => {
      commit('SET_PROCESSES', response)
    })
  },
  getCategories({ commit }) {
    this.$axios.$get('api/materials/category').then(response => {
      commit('SET_CATEGORIES', response)
    })
  }
}
