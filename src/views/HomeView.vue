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
apis.ansu
  .getHomeTheme({ dom: head_dom.value, loading: loading1 })
  .then((val) => {
    console.log('val', val)
  })
setTimeout(async () => {
  apis.ansu.getHomeTheme({ dom: head_dom.value, loading }).then((val)=>{
    console.log('val----',val)
  })
}, 3000)

onMounted(async () => {
  const data2 = await apis.ansu.getHomeHotel({ dom: card_dom.value })
})
</script>
<style lang="less" scoped></style>
