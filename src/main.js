import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import './global.css'
// import store from './store/Index.js';

const app = createApp(App)

app.use(router)
// app.use(store)

app.mount('#app')
