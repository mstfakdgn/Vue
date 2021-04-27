<template>
  <ul>
    <resource-item
      v-for="resource in resources"
      :key="resource.id"
      :resource="resource"
    ></resource-item>
  </ul>
</template>

<script>
import ResourceItem from './ResourceItem.vue';

export default {
  components: {
    'resource-item': ResourceItem
  },
  // props: {
  //     resources: {
  //         type:Object,
  //         required:true
  //     }
  // }
  inject: ['resources'],
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
