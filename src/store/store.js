import { createStore } from 'vuex'

const url = 'http://localhost:8000/api/posts'
const urlComments = 'http://localhost:8000/api/comments'
const urlAuth = 'http://localhost:8000/api/auth/login'
const store = createStore({
  state: {
    posts: [],
    postSelected: null,
    pagination: null,
    token: null
  },
  getters: {
    loggedIn(state) {
      return state.token !== null
    }
  },
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
    },
    RETRIEVE_TOKEN(state, token) {
      state.token = token
    },
    DELETE_TOKEN(state, payload) {
      state.token = payload
    }
  },
  actions: {
    async getPost() {
      const res = await fetch(url, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + this.state.token
        }
      })
      const jsonData = await res.json()
      this.commit('ADD_POSTS', jsonData.data)
      delete jsonData.data
      this.commit('ADD_PAGINATION', jsonData)
    },
    async createPost(context, credentials) {
      const res = await fetch(url, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + this.state.token
        },
        method: 'POST',
        body: JSON.stringify(credentials)
      })
      const jsonData = await res.json()
      context.commit('ADD_POST', jsonData.data)
    },
    async showPost(context, credentials) {
      const res = await fetch(`${url}/get-post-by-id/${credentials.id}`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + this.state.token
        }
      })
      const jsonData = await res.json()
      context.commit('ADD_POST_SELECTED', jsonData)
    },
    async addComment(context, credentials) {
      const res = await fetch(urlComments, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + this.state.token
        },
        method: 'POST',
        body: JSON.stringify(credentials)
      })
      const jsonData = await res.json()
      context.commit('ADD_POST_SELECTED', jsonData)
    },
    async retrieveToken(context, credentials) {
      const res = await fetch(urlAuth, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(credentials)
      })
      const jsonData = await res.json()
      context.commit('RETRIEVE_TOKEN', jsonData.token)
    },
    async deleteToken(context) {
      context.commit('DELETE_TOKEN', null)
    }
  },
  modules: {}
})

export default store
