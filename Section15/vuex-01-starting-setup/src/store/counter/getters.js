export default {
    testAuth(state, getters, rootState, rootGetters) {
        console.log(getters, rootState, rootGetters);
        return state.isAuthenticated;
      },
      finalCounterGetter(state) {
        return state.counter * 2;
      },
      normalizedCounter(_, getters) {
        const finalCounter = getters.finalCounterGetter;
        if (finalCounter < 0) {
          return 0;
        } else if (finalCounter > 100) {
          return 100;
        }
        return finalCounter;
      }
}