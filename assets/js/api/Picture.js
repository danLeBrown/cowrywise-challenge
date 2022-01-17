import Api from './Api'

export default {
  all() {
    return Api.get('/search/photos?page=1&per_page=8&query=african')
  },

  search(data) {
    return Api.get(`/search/photos?page=1&per_page=8&query=${data.query}`)
  },
}
