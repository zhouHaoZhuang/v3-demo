<template>
  <div>发送请求</div>
  <a href="http://localhost:3000/download">download 点击下载文件</a>
  <div>
    <van-field v-model="value" label="ip地址" placeholder="请输入IP地址" />
    <van-button type="primary" @click="getIPInfo">查询ip信息</van-button>
    <div>
      <div v-for="(v, k) in data.ipInfo" :key="k">{{ k }}:{{ v }}</div>
    </div>
    <img id="img" :src="data.img" />
    <van-button type="primary" @click="downloadImg">下载图片</van-button>
  </div>
</template>
<script setup>
import apis from '@/api'
import axios from 'axios'
import { ref, reactive } from 'vue'

const data = reactive({
  ipInfo: {},
  img: '',
})

const value = ref('')
apis.ansu
  .getHomeData({ name: 'nih', break: true })
  .then((res) => {
    console.log(res, '得到的数据')
  })
  .catch((err) => {
    console.log('err', err)
  })
/**
 * 分段加载
 */
function fenduan(params) {
  axios
    .get('http://localhost:3000/fenduandownload', {
      headers: {
        Range: 'bytes=0-4',
        // Range: 'bytes=5-',
        // Range: 'bytes=500-600',  // 超出长度会报  416 Range Not Satisfiable 提示
        // Range: 'bytes=0-2,4-5,7-',  // 多段下载
      },
    })
    .then((res) => {
      console.log(res.data, '分段下载')
    })
    .catch((err) => {
      console.log(err, 'err 分段下载错误 ')
    })
}
fanduanhebing()
/**
 * 分段加载，并合并
 * @param {*} params
 */
function fanduanhebing(params) {
  const p1 = new Promise((resolve, reject) => {
    axios
      .get('http://localhost:3000/fenduandownloadpng', {
        headers: {
          Range: 'bytes=0-400000',
        },
        responseType: 'arraybuffer',
      })
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  })

  const p2 = new Promise((resolve, reject) => {
    axios
      .get('http://localhost:3000/fenduandownloadpng', {
        headers: {
          Range: 'bytes=400001-',
        },
        responseType: 'arraybuffer',
      })
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  })

  Promise.all([p1, p2]).then((res) => {
    const [buffer1, buffer2] = res

    const arr = new Uint8Array(buffer1.byteLength + buffer2.byteLength)

    const arr1 = new Uint8Array(buffer1)
    arr.set(arr1, 0)

    const arr2 = new Uint8Array(buffer2)
    arr.set(arr2, arr1.byteLength)
    const blob = new Blob([arr.buffer])
    const url = URL.createObjectURL(blob)
    data.img = url
    console.log(arr.buffer)
  })
}

function downloadImg() {
  const link = document.createElement('a')
  link.href = data.img
  link.download = 'image.jpg'
  document.body.appendChild(link)
  link.click()
  link.addEventListener('click', () => {
    link.remove()
  })
}
/**
 * 分段下载  通过获取文件长度，然后分段下载，最后合并
 */
(async function() {
    const { data: len } = await axios.get('http://localhost:3000/fenduanlength');
    const res = await concurrencyDownload('http://localhost:3000/fenduandownloadpng', len, 400000);
    console.log(res)

    const blob = new Blob([res]);
    const url = URL.createObjectURL(blob);
    console.log('url',url)
    data.img = url
    // downloadImg()
})();

// name()
// function name(params = 1) {
//   console.log('params',params)
// }

async function concurrencyDownload(path, size, chunkSize) {
  let chunkNum = Math.ceil(size / chunkSize)
  const downloadTask = []
  for (let i = 1; i <= chunkNum; i++) {
    const rangeStart = chunkSize * (i - 1)
    const rangeEnd = chunkSize * i - 1

    downloadTask.push(
      axios.get(path, {
        headers: {
          Range: `bytes=${rangeStart}-${rangeEnd}`,
        },
        responseType: 'arraybuffer',
      })
    )
  }
  const arrayBuffers = await Promise.all(
    downloadTask.map((task) => {
      return task.then((res) => res.data)
    })
  )
  return mergeArrayBuffer(arrayBuffers)
}

function mergeArrayBuffer(arrays) {
  let totalLen = 0
  for (let arr of arrays) {
    totalLen += arr.byteLength
  }
  let res = new Uint8Array(totalLen)
  let offset = 0
  for (let arr of arrays) {
    let uint8Arr = new Uint8Array(arr)
    res.set(uint8Arr, offset)
    offset += arr.byteLength
  }
  return res.buffer
}

/* 

https://ipinfo.io/42.236.73.60/json

*/
function getIPInfo() {
  if (value.value) {
    axios('https://api.ip.sb/geoip/' + value.value).then((res) => {
      console.log(res.data, 'ip信息')
      data.ipInfo = res.data
    })
  }
}
</script>
<style lang="less" scoped>
div {
  color: #fff;
}
img {
  width: 300px;
}
</style>
