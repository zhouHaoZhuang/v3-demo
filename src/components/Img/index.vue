<template>
  <div>
    <!-- v-bind="$attrs"  属性透传 -->
    <van-image
      width="100%"
      height="100%"
      :src="src"
      :fit="fit"
      v-lazy="src"
      v-bind="$attrs"
    />
  </div>
</template>
<script setup>
defineProps({
  src: {
    type: String,
    default: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
  },
  fit: {
    type: String,
    default: 'cover',
  }
})
</script>
<style lang="less" scoped></style>
