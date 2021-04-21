const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      // fullName: ''
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    },
    // // name(newValue, oldValue)
    // name(value) {
    //   this.fullName = value + ' ' + this.lastName;
    // },
    // lastName(value) {
    //   this.fullName = this.name + " " + value;
    // }
  },
  computed: {
    fullName() {
      if (this.name === "" || this.lastName === "") {
        return "";
      } else {
        return this.name + " " + this.lastName;
      }
    },
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    reset() {
      this.name = "";
    },
  },
});

app.mount("#events");
