import MyLoading from '../components/MyLoading.vue';
import { createApp } from 'vue'

function showLoading (msg, onclick) {
  const div = document.createElement('div')
  document.body.appendChild(div)
  const app = createApp(MyLoading, {
    msg,
    onClick () {
      onclick(() => {
        console.log('--------------------');
        app.unmount()
        div.remove()
      })
    }
  })
  app.mount(div)
  return () => {   // 暴露卸载组件的方法，可直接调用，  类似于 toast 组件
    app.unmount()
    div.remove()
  }
}

export { showLoading }