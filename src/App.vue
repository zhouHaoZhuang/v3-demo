<script setup>
import { RouterLink, RouterView, useRoute, useLink } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Meting from './components/Meting/index.vue'
import { ref, nextTick } from 'vue'
import apis from '@/api'
import routers from '@/router/config.js'
apis.ansu.getHomeData({ name: 'nih' }).then((res) => {
  console.log(res)
})

const top = ref(0)
const left = ref(0)
const showTouch = ref(false)
// console.log('routers', routers)

// console.log(apis.ansu)

// apis.ansu.getHomeData({ name: 'nih' }).then((res) => {
//   console.log(res, '得到的数据')
// })
// 包含 `to` 和任何其他可以传递给 <router-link> 的 prop
const link = useLink({ to: '/testkeep' })
// console.log(link, 'kkk')

const unfold = ref(true)

nextTick(() => {
  let dom = document.documentElement
  dom.addEventListener('touchstart', (e) => {
    // console.log(
    //   '触摸开始事件',
    //   e.targetTouches[0].pageX,
    //   e.targetTouches[0].pageY
    // )
    // showTouch.value = true
    // top.value = e.targetTouches[0].pageY
    // left.value = e.targetTouches[0].pageX
  })
  dom.addEventListener('touchmove', (e) => {
    // console.log(
    //   '触摸中事件',
    //   e.targetTouches[0].pageX,
    //   e.targetTouches[0].pageY
    // )
    // top.value = e.targetTouches[0].pageY
    // left.value = e.targetTouches[0].pageX
  })
  dom.addEventListener('touchend', (e) => {
    // console.log('触摸结束事件', e)
    setTimeout(() => {
      showTouch.value = false
    }, 300)
  })
  dom.addEventListener('touchcancel', (e) => {
    // console.log('触摸意外事件', e)
    setTimeout(() => {
      showTouch.value = false
    }, 300)
  })
})
</script>

<template>
  <div class="app-page">
    <transition name="fide">
      <div
        class="touch-box transition"
        v-show="showTouch"
        :style="`top:${top - 10}px;left:${left - 10}px`"
      ></div>
    </transition>
    <Meting />
    <div
      @mouseleave="unfold = true"
      class="left-box animate__animated"
      :class="{ backOutLeft: unfold, backInLeft: !unfold }"
    >
      <ul>
        <li
          v-for="(item, index) in routers"
          :key="index"
          :class="{ atv: item.path == $route.path }"
          @click="$router.push(item.path)"
        >
          {{ item.meta.title }}
        </li>
      </ul>
      <div
        class="icon-box"
        @click="unfold = !unfold"
        @mouseenter="unfold = false"
      >
        <van-icon color="#000" :name="unfold ? 'arrow' : 'arrow-left'" />
      </div>
    </div>
    <div class="right-box">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component v-if="$route.meta.keepAlive" :is="Component" />
        </keep-alive>
        <component v-if="!$route.meta.keepAlive" :is="Component" />
      </router-view>
    </div>
  </div>
</template>

<style scoped lang="less">
.touch-box {
  width: 20px;
  height: 20px;
  background-color: #ff7b2e;
  border-radius: 50%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  pointer-events: none;
}

.fide-leave-to {
  opacity: 0;
}

.fide-leave-from {
  opacity: 1;
}
.fide-leave-active {
  transition: all 0.5s;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}
.app-page {
  display: flex;
  height: 100vh;
  background-image: linear-gradient(#b3b3b3b2, rgba(102, 102, 102, 0.858)),
    url(@/assets/images/bg.jpg);
  background-size: 100% 100%, cover;
  color: #ffc531;
  .right-box {
    flex: 1;
    padding: 15px;
    height: 100vh;
    overflow: auto;
    color: #000000;
  }
}
.left-box {
  position: relative;
  transition: all 0.3s;
  z-index: 100;
  width: max-content;
  > ul {
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    border-right: 1px solid #ccc;
    li {
      padding: 5px;
      margin-bottom: 3px;
      margin-bottom: 5px;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.3s;
      white-space: nowrap;
      font-size: 12px;
    }
    .atv {
      background-color: #ebebeb;
      color: #14c832;
    }
  }
  .icon-box {
    position: absolute;
    top: 10px;
    right: -20px;
    background-color: #abfff9;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0 50% 50% 0;
    z-index: 999;
    opacity: 1;
  }
  &.backOutLeft {
    max-width: 0;
    // opacity: 0;
  }
  &.backInLeft {
    max-width: 200px;
    // opacity: 1;
  }
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  a {
    color: #000;
  }
}
nav a.router-link-exact-active {
  /* color: var(--color-text);
   */
  color: red;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  // header {
  //   display: flex;
  //   place-items: center;
  //   padding-right: calc(var(--section-gap) / 2);
  // }

  // .logo {
  //   margin: 0 2rem 0 0;
  // }

  // header .wrapper {
  //   display: flex;
  //   place-items: flex-start;
  //   flex-wrap: wrap;
  // }

  // nav {
  //   text-align: left;
  //   margin-left: -1rem;
  //   font-size: 1rem;
  //   padding: 1rem 0;
  //   margin-top: 1rem;
  // }
  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
