<template>
  <div>
    <base-card>
      <form @submit.prevent="addResource">
        <div class="form-control">
          <label>Title</label>
          <input type="text" name="title" id="text" v-model="title" />
        </div>
        <div class="form-control">
          <label>Description</label>
          <textarea
            name="description"
            id="description"
            rows="3"
            v-model="description"
          ></textarea>
        </div>
        <div class="form-control">
          <label>Link</label>
          <input type="url" name="link" id="link" v-model="url" />
        </div>
        <div class="form-control">
          <base-button type="submit">Add Resource</base-button>
        </div>
      </form>
    </base-card>
    <base-error v-if="isError" title="Invalid Input" @close="confirmError">
        <template #default>
            <p>Unfortunately, at least one input value is invalid</p>
        </template>
        <template #actions>
            <base-button @click="confirmError">Ok</base-button>
        </template>
    </base-error>
  </div>
</template>

<script>
export default {
  inject: ['addResourceMethod'],
  data() {
    return {
      url: '',
      description: '',
      title: '',
      isError: false
    };
  },
  methods: {
    addResource() {
      if (this.url.trim() === '' || this.description.trim() === '' || this.title.trim() === '') {
        this.isError = true;
      } else {
        this.addResourceMethod(this.url, this.description, this.title);
      }
    },
    confirmError() {
      this.isError = false;
    },
  }
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
