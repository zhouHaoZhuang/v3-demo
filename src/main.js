import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import vant from '@/directive/index.js'


import './assets/main.css'

const app = createApp(App)

app.use(vant)
app.use(createPinia())
app.use(router)

app.mount('#app')
