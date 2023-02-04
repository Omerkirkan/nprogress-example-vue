import { createStore } from 'vuex'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    getDatas() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, 2000)
      })
    }
  },
})
