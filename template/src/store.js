import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const storeVersion = '0.1.0'

export const store = new Vuex.Store({
  plugins: [createPersistedState({key: process.env.APP_NAME  + storeVersion})],
  strict: process.env.NODE_ENV !== 'production',
  state: {
    test: null
  },
  mutations: {
    updateTest (state, payload) {
      state.test = payload
    }
  }
})
