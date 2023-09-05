import { createApp } from 'vue'
import QSpin from '@/components/QSpin/index.vue'
export default function () {
  /** 使用WeakMap类型的数据 键名所指向的对象可以被垃圾回收 避免dom对象的键名内存泄漏 */
  const loadingDom = new WeakMap()
  /**
   * 添加局部loading
   * @param config
   */
  const setLoading = (config) => {
    const loadingTarget = config.dom
    if (loadingTarget === undefined) return
    const loadingDomInfo = loadingDom.get(loadingTarget)
    if (loadingDomInfo) {
      loadingDomInfo.count++
    } else {
      const appExample = createApp(QSpin)
      const loadingExample = appExample.mount(document.createElement(`div`))
      loadingTarget.appendChild(loadingExample.$el)
      loadingExample.show(loadingTarget)
      loadingDom.set(loadingTarget, {
        count: 1, //记录当前dom的loading次数
        appExample,
      })
    }
  }
  /**
   * 删除局部loading
   * @param config
   */
  const deleteLoading = (config) => {
    const loadingTarget = config.dom
    if (loadingTarget === undefined) return
    const loadingDomInfo = loadingDom.get(loadingTarget)
    if (loadingDomInfo) {
      if (--loadingDomInfo.count === 0) {
        loadingDom.delete(loadingTarget)
        loadingDomInfo.appExample.unmount()
      }
    }
  }

  return { setLoading, deleteLoading }
}
