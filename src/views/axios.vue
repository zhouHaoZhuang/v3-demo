<template>
  <div>
    axios 请求
  </div>
</template>
<script setup>

import request from '@/utils/axios.js'


const getHomeData = (params) => {
  return request({
    url: "/data.json",
    method: "get",
    params,
  });
}
const getpageData = (params) => {
  return request({
    url: "/map.json",
    method: "get",
    params,
  });
}


getHomeData().then((res) => {
  console.log('res', res)
}
).catch((err) => {
  console.log('err', err)
}
)
getpageData().then((res)=> {
  console.log('res', res)
}).catch((err) => {
  console.log('err', err)
}
)

</script>
<style lang='less' scoped>
</style>