<template>
  <div>
    列表滚动
    <div>
      <ul id="list">
        <li v-for="item in 100" :key="item">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
onMounted((val) => {
  // function onscroll(e){
  //   console.log(e)
  // }
  // 获取列表元素和当前滚动高度
  var list = document.getElementById('list')
  console.log('list',list)
  var scrollTop = list.scrollTop

  // 定义每次滚动的高度，单位为像素
  var offset = 2

  // 定义定时器，每100毫秒滚动一次
  var timer = setInterval(function () {
    // console.log('asdasasds',)
    // 每次滚动的距离
    scrollTop += offset
    // 当滚动到底部时，回到第一个元素
    if (scrollTop >= list.scrollHeight - list.offsetHeight) {
      scrollTop = 0
    }
    // 每次滚动指定数量的像素
    list.scrollTop = scrollTop
  }, 100)

  // 当用户手动滚动时，清除定时器
  list.addEventListener('scroll', function () {
    // console.log('asdasdasd----',)
    scrollTop = list.scrollTop
    // clearInterval(timer)
    // timer = null
  })
  list.addEventListener('touchstart', function () {
    console.log('asdasdasd----',)
    clearInterval(timer)
    timer = null
  })

  // 当用户结束手动滚动时，重新创建定时器
  list.addEventListener('touchend', function () {
    console.log('asdasdasd----touchend',)
    if (!timer) {
      timer = setInterval(function () {
        scrollTop += offset
        if (scrollTop >= list.scrollHeight - list.offsetHeight) {
          scrollTop = 0
        }
        list.scrollTop = scrollTop
      }, 100)
    }
  })
})
</script>
<style lang="less" scoped>
ul {
  height: 100px;
  overflow: auto;
  li {
    height: 20px;
  }
}
</style>
