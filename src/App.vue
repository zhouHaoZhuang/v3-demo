<script setup>
import { RouterLink, RouterView } from 'vue-router'
import apis from './api'
import imgs from '@/assets/img/index.js'
import webImgs from '@/assets/webImg'

console.log('imgs', imgs)
console.log('webImgs', webImgs)
function getHomeTheme(params) {
  apis.ansu.getHomeTheme({ name: 'nih' }).then((res) => {
    console.log(res)
  })
}
</script>

<template>
  <header>
    <div class="wrapper">
      <div class="local-img">
        <Img :src="imgs.user.userindex"></Img>
      </div>
      <div class="webimg">
        <Img :src="webImgs.yinxin.demotopbg"></Img>
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
