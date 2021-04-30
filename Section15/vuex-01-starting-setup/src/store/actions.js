export default {
    // Another qaction can be triggered inside another action
  
     login(context) {
        context.commit('login');
      },
      logout(context) {
        context.commit('logout');
      }
}