import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/base.scss';
import './utils/rem.js';
const app = createApp(App);

app.use(router);

app.mount('#app');
