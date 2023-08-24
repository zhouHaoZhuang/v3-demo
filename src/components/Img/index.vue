<template>
  <div>
    <van-image
      width="100%"
      height="100%"
      :src="src"
      :fit="fit"
      :round="round"
      v-lazy="src"
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
  },
  round: {
    type: Boolean,
    default: false,
  },
})
</script>
<style lang="less" scoped></style>
