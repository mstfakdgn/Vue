const app = Vue.createApp({
    data: function () {
        return {
            name: 'Mustafa',
            age: 5,
            imageURL: 'https://cdn.pixabay.com/photo/2021/04/12/17/53/flower-6173483_960_720.jpg'
        }
    },
    methods: {
        randomNumber: function() {
            return Math.random();
        }
    }
});

app.mount('#assignment');