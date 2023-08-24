import MyOverlay from '@/components/Overlay/index.vue';
import { createApp, nextTick } from 'vue'
import { Overlay } from 'vant';
/**
 * api 组件 用于显示提示信息  弹窗
 * @param {String} text 
 * @returns 
 */
function showOverlay (text) {
  const div = document.createElement('div')
  document.body.appendChild(div)
  const app = createApp(MyOverlay, {
    text,
    removeDom
  })

  function removeDom () {
    app.unmount()
    div.remove()
  }
  app.use(Overlay) // 该组件必须重复注册
  nextTick(() => {
    app.mount(div)
  })
  // 暴露卸载组件的方法，可直接调用，  类似于 toast 组件
  return removeDom
}

export { showOverlay }