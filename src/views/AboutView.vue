<template>
  <div class="about">
    <h1 class="red-color">This is an about page</h1>
  </div>
</template>
<script setup>
console.log('缓存 about');

let ahtml = /*html*/'<a>asdasd<span>sdasdas</span><div></div></a>'
let aohtml = /*html*/`<div>asdasd<span>sdasdas</span></>`

</script>
<style lang="less" scoped>
@import '@/assets/css/red.css';
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
