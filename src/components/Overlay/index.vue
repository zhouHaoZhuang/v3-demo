<template>
  <div class="overlay-view">
    <van-overlay :show="show">
      <div class="wrapper"
           @click="closeOverlay">
        <div class="block"
             @click.stop
             v-html="text" />
      </div>
    </van-overlay>
  </div>
</template>
<script setup>
import { nextTick, ref, watch } from 'vue'
let show = ref(true)

const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  removeDom: {
    type: Function,
    default: () => { }
  }
})

function closeOverlay () {
  show.value = false
  nextTick(() => {
    props.removeDom()
  })
}

watch(show, () => {
  document.documentElement.style.overflow = show.value ? 'hidden' : 'auto'
  document.documentElement.style.height = show.value ? '100vh' : 'auto'
}, {
  immediate: true
})

</script>
<style lang='less' scoped>
.overlay-view {
  position: relative;
  z-index: 9999;
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .block {
    width: 280px;
    background: #fffcf8;
    box-shadow: 0px 2px 6px 0px rgba(106, 69, 22, 0.04);
    border-radius: 26px;
    padding: 28px 21px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #282828;
    line-height: 20px;
  }
}
</style>