<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadSurveys"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-if="error">{{ error }}</p>
      <p v-else-if="!isLoading && (!results || results.length == 0)">Nothing</p>
      <ul v-else-if="!isLoading && results && results.length > 0">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult
  },
  data() {
    return {
      results: [],
      isLoading: false,
      error: null
    };
  },
  mounted() {
    this.loadSurveys();
  },
  methods: {
    loadSurveys() {
      this.isLoading = true;
      this.error = null;
      fetch('https://vue-tutorials-d6f6d-default-rtdb.firebaseio.com/surveys.json')
        .then(res => {
          if (res.ok) {
            return res.json();
          }
        })
        .then(data => {
          const resultArray = [];

          for (const id in data) {
            resultArray.push({
              id: id,
              name: data[id].name,
              rating: data[id].rating
            });
          }

          this.results = resultArray;
          this.isLoading = false;
        })
        .catch(err => {
          this.error = err;
          this.isLoading = false;  
        });
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
