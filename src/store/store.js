import { createStore } from 'vuex'

const url = 'http://localhost:8000/api/posts'
const urlComments = 'http://localhost:8000/api/comments'
const store = createStore({
  state: {
    posts: [],
    postSelected: null,
    pagination: null
  },
  getters: {},
  mutations: {
    ADD_POSTS(state, payload) {
      state.posts = payload
    },
    ADD_PAGINATION(state, payload) {
      state.pagination = payload
    },
    ADD_POST(state, payload) {
      state.posts = [payload, ...state.posts]
    },
    ADD_POST_SELECTED(state, payload) {
      state.postSelected = payload
    }
  },
  actions: {
    async getPost() {
      const res = await fetch(url)
      const jsonData = await res.json()
      this.commit('ADD_POSTS', jsonData.data)
      delete jsonData.data
      this.commit('ADD_PAGINATION', jsonData)
    },
    async createPost(context, credentials) {
      const res = await fetch(url, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(credentials)
      })
      const jsonData = await res.json()
      context.commit('ADD_POST', jsonData.data)
    },
    async showPost(context, credentials) {
      const res = await fetch(`${url}/get-post-by-id/${credentials.id}`)
      const jsonData = await res.json()
      context.commit('ADD_POST_SELECTED', jsonData)
    },
    async addComment(context, credentials) {
      const res = await fetch(urlComments, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(credentials)
      })
      const jsonData = await res.json()
      context.commit('ADD_POST_SELECTED', jsonData)
    }
  },
  modules: {}
})

export default store
