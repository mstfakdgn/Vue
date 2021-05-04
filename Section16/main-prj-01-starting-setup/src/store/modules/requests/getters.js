export default {
  // state, getters, rootState, rootGetters
  requests(state, _, _2, rootGetters) {
    const coachId = rootGetters.userId;
    return state.requests.filter(request => request.coachId === coachId);
  },
  hasRequests(state, getters) {
      return getters.requests && getters.requests.length > 0;  
  }
};
