const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "1111112",
          email: "m@gmail.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "1111112",
          email: "n@gmail.com",
        },
      ],
    };
  },
});

app.component("friend-contact", {
  template: `
    <li>
    <h2>{{friend.name}}</h2>
    <button @click="toogleDetails">Show Details</button>
    <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong> {{friend.phone}}</li>
        <li><strong>Email:</strong> {{friend.email}}</li>
    </ul>
    </li>
  `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "julie",
        name: "Julie Jones",
        phone: "1111112",
        email: "n@gmail.com",
      },
    };
  },
  methods: {
    toogleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
      console.log(this.detailsAreVisible);
    },
  },
});

app.mount("#app");
