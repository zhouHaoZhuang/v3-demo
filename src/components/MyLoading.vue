<template>
  <div class="loading-box">
    <!-- 
      注意：  该种方法使用按需引入来，  全局引入会导致解析失败  对于 vant组件来说

      第二， 如果全局引入，须重新注册组件    
      app.use(Overlay)
      nextTick(() => {
        app.mount(div)
      })

      即以上写法也可生效
     -->
    <van-overlay :show="show"
                 @click="show = false">
      <div class="wrapper"
           @click.stop>
        <van-loading color="#1989fa" />
      </div>
    </van-overlay>
  </div>

</template>
<script setup>
import { ref } from 'vue'
const show = ref(true)

</script>
<style lang='less' scoped>
.loading-box {
  width: 100vw;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 120px;
  height: 120px;
  background-color: #fff;
}
</style>