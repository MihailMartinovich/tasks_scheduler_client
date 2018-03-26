import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';

import AuthState from './state/authState';
import AuthActions from './actions/AuthActions';
import AuthMutations from './mutations/authMutations';
import CommonActions from './actions/commonActions';

Vue.use(Vuex);

const vuexLocalStorage = new VuexPersist({
  key: 'vuex', // The key to store the state on in the storage provider.
  storage: window.localStorage, // or window.sessionStorage or localForage
  // Function that passes the state and returns the state with only the objects you want to store.
  reducer: state => state
  // Function that passes a mutation and lets you decide if it should update the state in localStorage.
  // filter: mutation => (true)
});

const store = new Vuex.Store({
  state: {
    ...AuthState
  },
  mutations: {
    ...AuthMutations
  },
  actions: {
    ...AuthActions,
    ...CommonActions
  },
  getters: {},
  plugins: [vuexLocalStorage.plugin]
});

export default store;
