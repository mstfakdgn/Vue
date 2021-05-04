<template>
  <section>
    <base-card>
      <h2>Register</h2>
      <register-form @submit-form="createCoach"></register-form>
    </base-card>
  </section>
</template>

<script>
import RegisterForm from '../../components/coaches/RegisterForm';

export default {
  components: {
    RegisterForm
  },
  methods: {
      createCoach(formData) {
          this.$store.dispatch('coaches/createCoach', formData);
          this.$router.replace('/coaches');
      }
  }
};
</script>
