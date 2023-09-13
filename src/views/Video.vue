<template>
  <div class="demo">
    <video class="video-js" id="playerId"></video>
  </div>
</template>

<script setup>
import 'video.js/dist/video-js.css'
import videojs from 'video.js'
import { onMounted } from 'vue'

onMounted(() => {
  const player = videojs('playerId', {
    width: 500,
    autoplay: false,
    controls: true,
    playsinline: true,
    controlBar: true,

    bigPlayButton: true,
  })
  player.src(
    'http://linan-tmzy.oss-cn-hangzhou.aliyuncs.com/upload/2022/12/24/1671812651723133.mp4'
  )
  player.on('ended', () => {
    //播放完成
  })
  player.on('error', () => {
    const error = player.error()
    console.log('video error:' + error.code + '-' + error.message)
  })
})
</script>
<style scoped lang="less">
.demo {
  // min-height: 100vh;
  background-color: #fff;
  position: relative;
}
</style>
