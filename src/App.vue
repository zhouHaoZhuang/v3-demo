<script setup>
/* 注意图片的需显式引入 */
import Imgs from '@/assets/img'
import WebImgs from '@/assets/webImg'
// import { ref } from "vue";  已自动引入
// import apis from '@/api'
/* 如果没有显示引入，使用以下方式亦可，推荐显式引入文件 */
const aImgs = Imgs
const aWebImgs = WebImgs
console.log('imgs', Imgs)
console.log('webImgs', WebImgs)
function getHomeTheme(params) {
  apis.ansu.getHomeTheme({ name: 'nih' }).then((res) => {
    console.log(res)
  })
}
// getHomeTheme()
const a = ref(0)
console.log('a',a)
</script>

<template>
  <header>
    <div class="wrapper">
      <div class="local-img">
        <Img :src="aImgs.user.userindex"></Img>
      </div>
      <div class="webimg">
        <Img :src="aWebImgs.yinxin.demotopbg"></Img>
      </div>
      <van-button type="primary">主要按钮</van-button>
      <Button>asdasd</Button>
      <h1 class="title">你好</h1>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <!-- <RouterView /> -->
</template>

<style scoped lang="less">
.local-img,
.webimg {
  width: 200px;
}
</style>
