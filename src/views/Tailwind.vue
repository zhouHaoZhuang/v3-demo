<template>
<div class="page container">
 <div class="flex justify-center items-center">
     <span class="bg-green">
      子元素行元素
     </span>
     <div class="mt-1.5 mb-1.5 px-2 bg-blue">
      块盒子
     </div>
 </div>
  <ul class="mx-auto w-6 text-orange text-opacity-70">
    <li>asdasd</li>
    <li>sadsadas</li>
    <li>dasdasd</li>
  </ul>
  <img class="w-6" src="../assets/images/bg.jpg" alt="">
  <img class="w-6" src="../assets/images/bg.jpg" alt="">
  <br><br>
  <router-view></router-view>
</div>
</template>
<script setup>
</script>
<style lang='less' scoped>
.page{
  background-color: #fff;
}
</style>