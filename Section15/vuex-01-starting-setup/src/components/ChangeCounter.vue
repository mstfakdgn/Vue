<template>
  <button @click="inc({value:11})">Add 11</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    // addOne() {
    //   //   this.$store.dispatch('increase', {value: 10});
    //   this.$store.dispatch({
    //     type: 'increase',
    //     value: 10
    //   });
    // }
    // ...mapActions(['increase'])
    ...mapActions('counter', {
        inc:'increase'
    })
  }
};
</script>
