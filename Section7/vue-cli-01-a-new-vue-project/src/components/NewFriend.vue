<template>
  <div>
    <form @submit.prevent="recordFriend">
      <div>
        <label for="name">Name</label>
        <input type="text" id="name" v-model="name" />
      </div>
      <div>
        <label for="phone">Phone</label>
        <input type="phone" id="phone" v-model="phone" />
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" />
      </div>
      <div>
        <label for="isFavorite">Is Favorite</label>
        <input type="text" id="isFavorite" v-model="isFavorite" />
      </div>
      <div>
        <button>Add Goal</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      phone: "",
      email: "",
      isFavorite: "",
    };
  },
  emits: ["record-friend"],
  methods: {
    recordFriend() {
      this.$emit(
        "record-friend",
        this.id,
        this.name,
        this.phone,
        this.email,
        this.isFavorite
      );
    },
  },
};
</script>
