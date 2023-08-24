import { createApp } from 'vue'
import { createPinia } from 'pinia'
import components from '@/components/index.js'
import directives from '@/directive/index.js'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)
directives(app)
app.use(createPinia())
app.use(router)
app.use(components)
app.mount('#app')
