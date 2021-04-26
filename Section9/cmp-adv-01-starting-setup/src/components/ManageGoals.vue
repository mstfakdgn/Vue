<template>
  <div>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal" />
    <button @click="setGoal">Set Goal</button>
    <teleport to="body">
      <error-dialog v-if="isError">
        <h2>Input is Invalid</h2>
        <p>Please enter some character</p>
        <button @click="confirmError">Okay</button>
      </error-dialog>
    </teleport>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isError: false,
    };
  },
  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value;
      if (enteredValue === "") {
        this.isError = true;
      } else {
        this.isError = false;
      }
    },
    confirmError() {
      this.isError = false;
    },
  },
};
</script>
