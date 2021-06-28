import { SET_MATERIAL_POSTS, SET_PROCESS_POSTS } from './mutations.type'

export const state = () => ({
  materialPosts: [],
  processPosts: []
})

export const mutations = {
  [SET_MATERIAL_POSTS](state, list) {
    state.materialPosts = list
  },
  [SET_PROCESS_POSTS](state, list) {
    state.processPosts = list
  }
}

export const actions = {
  getPosts(files) {
    return files.keys().map((key) => {
      let res = files(key)
      res.slug = key.slice(2, -5)
      return res
    })
  },
  async nuxtServerInit({ commit }) {
    // material collection type
    let materialFiles = await require.context('~/assets/content/material/', false, /\.json$/)
    await commit(SET_MATERIAL_POSTS, actions.getPosts(materialFiles))

    // process collection type
    let processFiles = await require.context('~/assets/content/process/', false, /\.json$/)
    await commit(SET_PROCESS_POSTS, actions.getPosts(processFiles))

    // ? When adding/changing NetlifyCMS collection types, make sure to:
    // ? 1. Add/rename exact slugs here
    // ? 2. Add/rename the MUTATION_TYPE names in `./mutations.type.js`
    // ? 3. Add/rename `pages/YOUR_SLUG_HERE` and use the Vuex store like the included examples
    // ? If you are adding, add a state, mutation and commit (like above) for it too
  }
}
