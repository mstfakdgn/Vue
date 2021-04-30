import { rootMutations } from './mutations.js';
import { rootActions } from './actions.js';
import { rootGetters } from './getters.js';
import { counterModule } from './counter/index.js';

export default {
  modules: {
    counter: counterModule
  },
  state() {
    return {
      isAuthenticated: false
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters
};
