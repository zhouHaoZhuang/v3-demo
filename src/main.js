import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import vant from '@/directive/index.js'
import './assets/main.css'

const app = createApp(App)

app.directive('touch', {
  mounted (el, binding) {
    let startX
    let startY
    el.addEventListener('touchstart', function (e) {
      startX = e.touches[0].clientX
      startY = e.touches[0].clientY
    })
    el.addEventListener('touchend', function (e) {
      let endX = e.changedTouches[0].clientX
      let endY = e.changedTouches[0].clientY
      let direction = getDirection(startX, startY, endX, endY)
      if (direction === binding.arg) {
        binding.value && binding.value()
      }
    }, false)
    function getDirection (startX, startY, endX, endY) {
      let diffX = endX - startX
      let diffY = endY - startY
      let absX = Math.abs(diffX)
      let absY = Math.abs(diffY)
      let direction = ''
      if (absX >= absY) {
        direction = diffX > 0 ? 'right' : 'left'
      } else {
        direction = diffY > 0 ? 'down' : 'up'
      }
      return direction
    }
  }
})
app.use(vant)
app.use(createPinia())
app.use(router)

app.mount('#app')
