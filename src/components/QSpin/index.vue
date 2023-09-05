<template>
  <div v-show="visible" class="q-spin">
    <van-loading size="24px">加载中...</van-loading>  </div>
</template>

<script setup >

const visible = ref(false)
const show = (dom) => {
  visible.value = true
  dom.style.transform = dom.style.transform || `translate(0)`
}
defineExpose({ show })
</script>

<style scoped lang="less">
.q-spin {
  position: fixed;
  z-index: 999;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(0 0 0 / 10%);
}
</style>
