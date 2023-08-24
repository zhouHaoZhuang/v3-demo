import { createApp } from 'vue'
import { createPinia } from 'pinia'
import directives from '@/directive/index.js'
import components from '@/ui/index.js'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)
directives(app) // 注册全局指令
components(app)  // 注册全局组件
app.use(createPinia())
app.use(router)
app.mount('#app')
