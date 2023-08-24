import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
/**
 * 1.引入全局样式  以下两种方式都可以  直接引入tailwindcss/tailwind.css 是新版写法
 *    但是注意  内部包含的 base.css  会重置 vant 等三方库的样式
 */
import vant from '@/directive/index.js'


// import "tailwindcss/tailwind.css"  // 新版写法  全量引入
import "tailwindcss/components.css"
import "tailwindcss/utilities.css"

// import './assets/input.css'
import './assets/main.css'
import 'animate.css';
import yltouch from '@/directive/index.js'
// 完整加载
import VueLuckyCanvas from '@lucky-canvas/vue'
const app = createApp(App)
yltouch(app)

app.use(vant)
app.use(createPinia())
app.use(router)
app.use(VueLuckyCanvas)

app.mount('#app')
