<template>
  <div>
    <header-cmp></header-cmp>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/layouts/TheHeader.vue';

export default {
  components: {
    'header-cmp':Header
  }
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
