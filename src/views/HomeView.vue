<template>
  <div>
    <main>home View</main>
    <div ref="head_dom">我是头部数据</div>
    <p ref="card_dom">我是卡片内容</p>
  </div>
</template>
<script setup>
const head_dom = ref()
const card_dom = ref()
const loading = ref(false)
const loading1 = ref(false)
// 全局loading 使用
apis.ansu.getHomeTheme({ loading: loading1 }).then((val) => {
  console.log('val', val)
})
// setTimeout(() => {
//   apis.ansu.getHomeTheme({ loading }).then((val) => {
//     console.log('val----', val)
//   })
// }, 3000)

onMounted(async () => {
  // 局部loading使用
  const data2 = await apis.ansu.getHomeHotel({ dom: card_dom.value })
  console.log('data2',data2)
})
</script>
<style lang="less" scoped></style>
