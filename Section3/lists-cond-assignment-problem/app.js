const app = Vue.createApp({
  data() {
    return { tasks: [], task: "", show: true };
  },
  computed: {
    buttonCaption() {
      return this.show ? "Hide List" : "Show List";
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.task);
      console.log(this.tasks);
    },
    toogleList() {
      this.show = !this.show;
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
  },
});

app.mount("#assignment");
