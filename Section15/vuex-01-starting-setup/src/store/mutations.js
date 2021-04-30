export default {
  login(state) {
    state.isAuthenticated = true;
  },
  logout(state) {
    state.isAuthenticated = false;
  }
};
