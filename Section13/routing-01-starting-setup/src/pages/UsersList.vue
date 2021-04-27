<template>
  <div>
    <button @click="confirmInput">Confirm</button>
    <button @click="savedChanges">Save changes</button>
    <ul>
      <user-item
        v-for="user in users"
        :key="user.id"
        :name="user.fullName"
        :role="user.role"
      ></user-item>
    </ul>
  </div>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem
  },
  inject: ['users'],
  data() {
    return {
      changesSaved:false
    }
  },
  methods: {
    confirmInput() {
      this.$router.push('/teams');
      // this.$router.back();
      // this.$router.forward();
    },
    savedChanges () {
      this.changesSaved = true;
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log('UserList component beforeChechk',to, from, next);
    next()
  },
  beforeRouteLeave(to, from, next) {
    if (this.changesSaved) {
      next();
    } else {
      const userWantsToLeave = confirm('Are you sure?');

      next(userWantsToLeave);
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
