<script setup>
/* 注意图片的需显式引入，自动引入有问题，只在js部分生效，而template部分不可使用，故挂载 app实例可避免该问题了 */
// import Imgs from '@/assets/img'
// import WebImgs from '@/assets/webImg'
// import { ref } from "vue";  //已自动引入
// import apis from '@/api'
/* 如果没有显示引入，使用以下方式亦可，推荐显式引入文件 */
// const aImgs = Imgs
// const aWebImgs = WebImgs
// console.log('webImgs', WebImgs)
import routes from '@/router/config.js'

import { useShowToast, useNoneToast } from '@/hooks/toast.js'

const $route = useRoute()
const thisName = ref('to')
const appData = reactive({
  includeList: [],
})
routes.forEach((item) => {
  if (item.meta && item.meta.alive) {
    if (item.meta.cname) {
      appData.includeList.push(item.meta.cname)
    }
  }
})

function getHomeTheme(params) {
  apis.ansu.getHomeTheme({ name: 'nih' }).then((res) => {
    console.log(res)
  })
}

// 获取app实例
const app = getCurrentInstance().appContext.app
const globalProperties = app.config.globalProperties
// 访问全局属性
console.log('$Imgs', globalProperties.$Imgs)
console.log('getCurrentInstance()', getCurrentInstance())

// getHomeTheme()
const a = ref(0)
console.log('a', a)
// console.log('imgs', Imgs)
// let toast = useShowToast()
// setTimeout(() => {
//   useNoneToast(toast)
// }, 3000);

watch($route, (to, from) => {
  // console.log('路由变化了', to.meta, from.meta)
  if (history.state.forward) {
    thisName.value = 'back'
  } else {
    thisName.value = 'to'
  }
})
</script>

<template>
  <!-- <header>
    <div class="wrapper">
      <div class="local-img">
        <Img :src="$Imgs.user.userindex"></Img>
      </div>
      <div class="local-img">
        <Img :src="$Imgs.user.userindex"></Img>
      </div>
      <div class="webimg">
        <Img :src="$WebImgs.yinxin.demotopbg"></Img>
      </div>
      <van-button type="primary">主要按钮</van-button>
      <Button>asdasd</Button>
      <h1 class="title">你好</h1>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
  <router-view v-slot="{ Component }">
    <transition :name="thisName">
      <keep-alive :include="appData.includeList">
        <component class="app-page" :key="$route.title" :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<style scoped lang="less">
.local-img,
.webimg {
  width: 200px;
}
.app-page {
  left: 0;
  top: 0;
}

.to-enter-from,
.back-leave-to {
  opacity: 0;
  // transform: translateX(100%);
  position: absolute;
  left: 100%;
}
.back-enter-from,
.to-leave-to {
  opacity: 0;
  // transform: translateX(-100%);
  position: absolute;
  left: -100%;
}

.to-enter-to,
.to-leave-from,
.back-enter-to,
.back-leave-from {
  opacity: 1;
  // transform: translateX(0);
  position: absolute;
  left: 0;
}
.to-enter-active,
.to-leave-active,
.back-enter-active,
.back-leave-active {
  transition: all 0.5s;
}
</style>
