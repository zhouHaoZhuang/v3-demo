<template>
  <div class="meting-box">
    <meting-js
      id="8949778942"
      server="tencent"
      type="playlist"
      fixed="true"
      autoplay="false"
      loop="all"
      order="random"
      preload="auto"
      list-folded="ture"
      list-max-height="500px"
      lrc-type="1"
    >
    </meting-js>
  </div>
</template>
<script setup>

/**
 * id: 歌曲id 播放列表id 专辑id 搜索关键字
 * server: 音乐平台  netease tencent kugou xiami baidu
 * type: 搜索类型  song playlist album search
 */


</script>
<style lang="less" scoped>
.meting-box {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 300px;
  z-index: 999;
}
</style>
