import { createApp } from 'vue'
import { createPinia } from 'pinia'
import directives from '@/directive/index.js'
import components from '@/ui/index.js'
import App from './App.vue'
import router from './router'
import Imgs from "@/assets/img/index.js";
import WebImgs from '@/assets/webImg'

import './assets/main.css'

const app = createApp(App)
directives(app) // 注册全局指令
components(app)  // 注册全局组件
/*
app 实例 直接挂载到全局
 const GLOBALS_ALLOWED =
  'Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,' +
  'decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,' +
  'Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console' */
app.config.globalProperties.$Imgs = Imgs
app.config.globalProperties.$WebImgs = WebImgs
app.use(createPinia())
app.use(router)
app.mount('#app')
