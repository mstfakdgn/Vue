<template>
  <div>
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
  </div>
</template>

<script>
import {
  computed,
  inject,
  onBeforeMount,
//   onMounted,
//   onBeforeUpdate,
//   onUpdated,
//   onBeforeUnmount,
//   onUnmounted
} from 'vue';

export default {
  props: ['firstName', 'lastName'],
  setup(props, context) {
    const uName = computed(function() {
      return props.firstName + ' ' + props.lastName;
    });

    const age = inject('userAge');
    context.emit(''); // this.$emit('');

    onBeforeMount(function() {
        console.log('before mount');
    });

    return {
      userName: uName,
      age: age
    };
  }
};
</script>
