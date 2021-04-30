import { createStore } from 'vuex';
import productsModule from './modules/products.js';
import cartsModule from './modules/cart.js';

const store = createStore({
  modules: {
    carts: cartsModule,
    prods: productsModule
  },
  state() {
    return {
      isLoggedIn: false
    };
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    }
  },
  actions: {
    login(context) {
      context.commit('login');
    },
    logout(context) {
      context.commit('logout');
    }
  },
  getters: {
      isAuthenticated(state) {
          return state.isLoggedIn;
      }
  }
});

export default store;
