import { createApp } from 'vue';
import App from './App.vue';
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseError from './components/UI/BaseError.vue';


const app = createApp(App)

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-error', BaseError);
app.mount('#app');
