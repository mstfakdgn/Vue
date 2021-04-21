const app = Vue.createApp({
  data() {
    return {
      userClass: [],
      toogleColor: "",
      toogleFlag: true,
    };
  },
  computed: {
    toogleVisibility() {
      return {
        visible: this.toogleFlag,
        hidden: !this.toogleFlag
      }
    }
  },
  methods: {
    addClass(event) {
      this.userClass.push(event.target.value);
    },
    changeBackground(event) {
      this.toogleColor = event.target.value;
      console.log(this.toogleColor);
    },
    toogle() {
      this.toogleFlag = !this.toogleFlag;
    },
  },
});

app.mount("#assignment");
