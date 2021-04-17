import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

fetch('http://localhost:3000/api').then((r) => r.json()).then((data) => {
  console.log(data);
});

createApp(App).use(store).use(router).mount('#app');
