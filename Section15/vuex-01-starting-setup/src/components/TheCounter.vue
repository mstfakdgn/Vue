<template>
  <div>
    <h3>{{ finalCounterGetter }}</h3>
    <p>Normal Counter</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    // counter() {
    //   return this.$store.getters.normalizedCounter;
    // }
    ...mapGetters('counter',['finalCounterGetter'])
  }
};
</script>
