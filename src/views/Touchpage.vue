<template>

  <div v-touch:left="handleSwipeLeft"
       v-touch:right="handleSwipeRight">
    asdasdas
  </div>

  <!-- <ul> -->
  <button @click="clickKeyNum">点击切换</button>

  <transition-group name="list"
                    tag="ul"
                    :class="{'li-width':keyNum}">
    <li v-for="item in 6"
        :key="item+keyNum"> {{item}}</li>
  </transition-group>
  <!-- </ul> -->

</template>
<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue'
const $router = useRouter()

const keyNum = ref(0)

function clickKeyNum () {
  keyNum.value = keyNum.value ? 0 : 1
  console.log();
}

function handleSwipeLeft (params) {
  console.log('左滑---------------')
  $router.push('/pdfh5')
}

function handleSwipeRight (params) {
  console.log('右滑')
  $router.push('/pdftoimg')
}

</script>
<style lang='less' scoped>
div {
  width: 200px;
  height: 200px;
  background-color: #73e9f05e;
}
.li-width {
  width: 80%;
}
ul {
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  padding: 0;
  width: 100%;
  li {
    text-align: center;
    width: 120px;
    height: 50px;
    background-color: #fdbdbd;
    border: 3px solid #fff;
  }
}
.list-move, /* 对移动中的元素应用的过渡 */
.list-enter-active,
.list-leave-active {
  transition: all .5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(100%),translateX(100%);
}

/* 确保将离开的元素从布局流中删除
  以便能够正确地计算移动的动画。 */
.list-leave-active {
  position: absolute;
}
</style>