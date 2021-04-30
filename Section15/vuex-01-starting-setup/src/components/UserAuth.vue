<template>
  <div>
    <button @click="login" v-if="!isAuthenticated">Login</button>
    <button @click="logout" v-if="isAuthenticated">Logout</button>
    <p>{{ isTestAuth }}</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    methods: {

    ...mapActions(['login', 'logout'])
    },
    computed: {
    isTestAuth () {
        return this.$store.getters.testAuth;
    },
    ...mapGetters(['isAuthenticated'])

    }
}
</script>