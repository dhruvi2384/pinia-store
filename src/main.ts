import './assets/main.css'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const pina = createPinia()
app.use(router).use(pina)
app.mount('#app')
