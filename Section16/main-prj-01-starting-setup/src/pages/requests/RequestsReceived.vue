<template>
  <base-dialog :show="!!error" title="Error" @close="handleError">
    <p>{{ error }}</p>
  </base-dialog>
  <section>
    <base-card>
      <header>
        <h2>Requests Received</h2>
      </header>
      <ul v-if="hasRequests">
        <request-item
          v-for="request in requestsFromStore"
          :key="request.id"
          :request="request"
        ></request-item>
      </ul>
      <h3 v-else>There is no request</h3>
    </base-card>
    <div v-if="isLoading">
      <base-spinner></base-spinner>
    </div>
  </section>
</template>

<script>
import RequestItem from '../../components/requests/RequestItem.vue';

export default {
  components: {
    RequestItem
  },
  data() {
    return {
      error: null,
      isLoading: false
    };
  },
  computed: {
    requestsFromStore() {
      return this.$store.getters['requests/requests'];
    },
    hasRequests() {
      return this.$store.getters['requests/hasRequests'];
    }
  },
  methods: {
    async laodRequests() {
      this.isLoading = true;

      try {
        await this.$store.dispatch('requests/setRequests');
      } catch (error) {
        this.error = error.message || 'Error';
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    }
  },
  created() {
    this.laodRequests();
  }
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
