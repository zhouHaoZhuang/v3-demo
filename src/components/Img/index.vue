<template>
  <div>
    <!-- v-bind="$attrs"  属性透传   透传slot -->
    <van-image
      width="100%"
      height="100%"
      :src="src"
      :fit="fit"
      v-lazy="src"
      v-bind="$attrs"
    >
      <template v-for="(value, name) in $slots" #[name]="scopeData">
        <slot :name="name" v-bind="scopeData"> </slot>
      </template>
    </van-image>
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
})
</script>
<style lang="less" scoped></style>
