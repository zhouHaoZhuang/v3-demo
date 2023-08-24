<template>
  <div>
    <h1>抽奖</h1>
    <div>
      <SlotMachine
        ref="myLucky"
        width="200px"
        height="20px"
        :prizes="prizes"
        :blocks="blocks"
        :slots="slots"
        :defaultStyle="defaultStyle"
        :defaultConfig="defaultConfig"
        @start="startCallback"
        @end="endCallback(prize)"
      />
    </div>
    <div class="start-box">
      <button @click="startCallback">开始抽奖</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      blocks: [
        // { padding: '10px', background: '#869cfa' },
        // { padding: '10px', background: '#e9e8fe' },
      ],
      slots: [
        { order: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
        { order: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
        { order: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
        { order: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
        { order: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
        { order: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
        { order: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
        { order: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
      ],
      prizes: [
        { fonts: [{ text: '-' }] },
        { fonts: [{ text: '1' }] },
        { fonts: [{ text: '2' }] },
        { fonts: [{ text: '3' }] },
        { fonts: [{ text: '4' }] },
        { fonts: [{ text: '5' }] },
        { fonts: [{ text: '6' }] },
        { fonts: [{ text: '7' }] },
        { fonts: [{ text: '8' }] },
        { fonts: [{ text: '9' }] },
        { fonts: [{ text: '0' }] },
      ],
      defaultStyle: {
        fontSize: '15px',
        lineHeight: '20px',
        fontColor: '#fff',
      },
      defaultConfig: {
        rowSpacing: '0px',
        colSpacing: '0px',
      },
    }
  },
  methods: {
    // 点击抽奖按钮会触发star回调
    startCallback() {
      // 调用抽奖组件的play方法开始游戏
      this.$refs.myLucky.play()
      setTimeout(() => {
        const index = [9, 9, 6, 5, 6, 4, 3, 1]
        // 调用stop停止旋转并传递中奖索引
        this.$refs.myLucky.stop(index)
      }, 3000)
    },
    // 抽奖结束会触发end回调
    endCallback(prize) {
      console.log(prize)
    },
  },
}
</script>
<style lang="less" scoped>
.start-box{
  margin-top: 20px;
  font-size: 12px;
}
</style>
