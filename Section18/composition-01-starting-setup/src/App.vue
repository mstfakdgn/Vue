<template>
  <section class="container">
    <user-data :firstName="firstname" :lastName="lastname"></user-data>

    <h2>{{ userName }}</h2>
    <h3>{{ userAge }}</h3>

    <h2>{{ userFullName }}</h2>
    <h2>{{ userAgeWatch }}</h2>

    <button @click="changeAge">Change Age</button>
    <div>
      <input type="text" placeholder="firstname" v-model="firstname" />
      <input type="text" placeholder="lastname"  v-model="lastname"/>
      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>
</template>

<script>
import { ref, computed, watch, provide } from 'vue';
// Reactive only works with objects
import { reactive, toRefs } from 'vue';
import UserData from './components/UserData.vue';

export default {
  components: {
    UserData
  },
  setup() {
    // let uName = ref('Maximilian');
    // let uAge = ref(3);

    // const user = ref({
    //   name: 'Maximilian',
    //   age:3
    // });
    const firstname = ref('');
    const lastname = ref('');
    let userAgeWatch = ref(10)

    const lastNameInput = ref('');

    const user = reactive({
      name: 'Maximilian',
      age: 25
    });

    setTimeout(function() {
      // uName.value = 'Max';
      // uAge.value = 30
      user.name = 'Max';
      user.age = 30;
    }, 2000);

    const userRefs = toRefs(user);

    function changeAge() {
      user.age = 100;
      userAgeWatch.value = 0;
    }

    function setLastName() {
      lastname.value = lastNameInput.value.value;
    }

    watch([userAgeWatch, firstname], function(newValues, oldValues) {
      console.log(newValues, oldValues);
    });

    const uName = computed(function() {
      return firstname.value + ' ' +lastname.value;
    });

    provide('userAge', user.age);

    return {
      user: user,
      userName: userRefs.name,
      userAge: userRefs.age,
      changeAge: changeAge,
      userFullName: uName,
      firstname,
      lastname,
      userAgeWatch,
      lastNameInput,
      setLastName
    };
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
