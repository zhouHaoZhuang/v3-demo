<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import Test from '../components/test/index.vue'
import TestTwo from '../components/testTwo/index.vue'
import { showLoading } from '@/utils/Loading.js'

console.log('缓存  home');
// showLoading()

function clickLoading () {
  let aLoading = showLoading('你好', (callback) => {   // callback 卸载组件的回调
    console.log('关闭了')
    callback()
  })

  setTimeout(() => {
    console.log('2s关闭');
    aLoading()
  }, 2000);
}
</script>

<template>
  <main>
    <router-link to="/testkeep">testkeep</router-link>
    <van-button type="primary"
                @click="clickLoading">主要按钮</van-button>
    <van-icon name="chat-o" />
    <!-- <Test/>
    <TestTwo/>
    <TheWelcome /> -->
  </main>
</template>
