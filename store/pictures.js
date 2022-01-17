import Picture from '../assets/js/api/Picture'

const state = () => ({
  data: {},
  pictures: [],
})

const getters = {
  pictures: (state) => state.pictures,
}

const actions = {
  async getPictures({ commit }) {
    // state.pictures = []
    const res = await Picture.all()
    commit('setPictures', res)
  },
  async searchPictures({ commit }, data) {
    // state.pictures = []
    const res = await Picture.search(data)
    commit('setPictures', res)
  },
}

const mutations = {
  setPictures: (state, pictures) => {
    state.pictures = []
    state.pictures = pictures.data.results
    state.data = pictures.data
    return true
  },
  clearPictures: (state) => {
    state.pictures = []
    return true
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
