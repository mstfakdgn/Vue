const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      number:0,
      userName: '',
      confirmedName: ''
    };
  },
  methods: {
    increase: function () {
      this.counter = Number(this.counter) + Number(this.number);
    },
    decrease: function () {
      this.counter = Number(this.counter) - Number(this.number);
    },
    setName: function (event, secondName) {
      this.userName = event.target.value + ' ' + secondName;
    },
    setNumber: function (event) {
      this.number = event.target.value;
    },
    submitForm: function () {
      alert('Submit');
    },
    confirmName: function () {
      this.confirmedName = this.userName;
    }
  }
});

app.mount('#events');
