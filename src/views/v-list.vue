<template>
  <div class="vnode-list">
    <ul @scroll="onscroll" ref="ulref">
      <li v-for="(item, index) in data.list" :key="item.id">{{ item.id }}</li>
    </ul>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'

const ulref = ref(null)

const data = reactive({
  list: [],
  allList: [
    {
      id: '_z8ecakkca',
    },
    {
      id: '_ftpw5grz3',
    },
    {
      id: '_ep77q2mpj',
    },
    {
      id: '_suqtbuw75',
    },
    {
      id: '_4y9uw5ema',
    },
    {
      id: '_qetcata57',
    },
    {
      id: '_rjd26a0js',
    },
    {
      id: '_zg2ps1gd5',
    },
    {
      id: '_gndjs6rzb',
    },
    {
      id: '_yzv92oney',
    },
    {
      id: '_w18x7xymb',
    },
    {
      id: '_s50wxl0qq',
    },
    {
      id: '_74waxmf6i',
    },
    {
      id: '_o6taylsw7',
    },
    {
      id: '_khn1n34un',
    },
    {
      id: '_wstoes43v',
    },
    {
      id: '_go1ai0llc',
    },
    {
      id: '_uka25y0dw',
    },
    {
      id: '_9o41117fb',
    },
    {
      id: '_yehl0kmge',
    },
    {
      id: '_v47lxhbq9',
    },
    {
      id: '_h8swws8qa',
    },
    {
      id: '_xxv3p8isw',
    },
    {
      id: '_0ubh114yc',
    },
    {
      id: '_w56ybbw48',
    },
    {
      id: '_r3duknrfm',
    },
    {
      id: '_3iqr40zje',
    },
    {
      id: '_pxaowimbt',
    },
    {
      id: '_kuysjtdei',
    },
    {
      id: '_t2xqbbsdc',
    },
    {
      id: '_zj0q3yhm2',
    },
    {
      id: '_34qufjov3',
    },
    {
      id: '_sqva4l49q',
    },
    {
      id: '_zqvchewcd',
    },
    {
      id: '_gh4l1os9z',
    },
    {
      id: '_tcy1u81ys',
    },
    {
      id: '_6awwsl75v',
    },
    {
      id: '_koa4to4py',
    },
    {
      id: '_jbozrbffb',
    },
    {
      id: '_c2ulp0iht',
    },
    {
      id: '_dor1m7e7n',
    },
    {
      id: '_d928m9pyr',
    },
    {
      id: '_bn329ve2r',
    },
    {
      id: '_zcf6btbhi',
    },
    {
      id: '_q09ozgkk9',
    },
    {
      id: '_p71pn82i4',
    },
    {
      id: '_jjzqy3lz0',
    },
    {
      id: '_0w6rwde6x',
    },
    {
      id: '_eeve17ibg',
    },
    {
      id: '_vng5gr66f',
    },
    {
      id: '_czv9v92s0',
    },
    {
      id: '_b39vtkerl',
    },
    {
      id: '_i6ts3fa8p',
    },
    {
      id: '_0u6anypah',
    },
    {
      id: '_5x3dtldw9',
    },
    {
      id: '_0d8hs6mx1',
    },
    {
      id: '_ogzwoml1u',
    },
    {
      id: '_j8c28fji6',
    },
    {
      id: '_tufnpzmpb',
    },
    {
      id: '_yoykz2nj1',
    },
    {
      id: '_br9ltnjbg',
    },
    {
      id: '_9x3q38ysb',
    },
    {
      id: '_ki3staih8',
    },
    {
      id: '_cm55585r5',
    },
    {
      id: '_aqfzza5ik',
    },
    {
      id: '_khoossdok',
    },
    {
      id: '_zw6tgghrp',
    },
    {
      id: '_z4wp9qv8q',
    },
    {
      id: '_0v6psbu85',
    },
    {
      id: '_c7f0fuxrz',
    },
    {
      id: '_tdq70dnzc',
    },
    {
      id: '_1qcvnp4bt',
    },
    {
      id: '_46uxv78i8',
    },
    {
      id: '_9dobushew',
    },
    {
      id: '_3wz6q2pyg',
    },
    {
      id: '_1fmrqk85j',
    },
    {
      id: '_9otqr79pj',
    },
    {
      id: '_p2jg2dfn2',
    },
    {
      id: '_m2dvnpzjb',
    },
    {
      id: '_81m3r72j9',
    },
    {
      id: '_dthiy2rxz',
    },
    {
      id: '_hxwxs4960',
    },
    {
      id: '_ep6d05jhb',
    },
    {
      id: '_uz4fyshzy',
    },
    {
      id: '_vx91ymx4i',
    },
    {
      id: '_fg9vsbr3u',
    },
    {
      id: '_t3v3qqhas',
    },
    {
      id: '_36kg7jci6',
    },
    {
      id: '_t7do1t3d2',
    },
    {
      id: '_p9zygd359',
    },
    {
      id: '_zjop1xtqo',
    },
    {
      id: '_k40fgim3f',
    },
    {
      id: '_y9ve33kve',
    },
    {
      id: '_tfzlr2e59',
    },
    {
      id: '_qe8a3j28r',
    },
    {
      id: '_v48rmv9q0',
    },
    {
      id: '_vpbvtje1t',
    },
    {
      id: '_4zdj81ibo',
    },
    {
      id: '_mpzijvauy',
    },
    {
      id: '_7k8zp52re',
    },
  ],
  scrollOffset: 0, // 滚动高度
  offset: 2,
  timer: null,
  height: 100,
  width: 500,
  itemSize: 20,
  itemCount: 7,
})

function generateId() {
  return '_' + Math.random().toString(36).substr(2, 9)
}

// for (let index = 0; index < 100; index++) {
//   data.allList.push({
//     id: generateId(),
//   })
// }
console.log('data.allList', data.allList)
data.list = data.allList.slice(0, data.itemCount)

const getCurrentChildren = () => {
  // 可视区起始索引
  const startIndex = Math.floor(data.scrollOffset / data.itemSize)
  // 上缓冲区起始索引
  const finialStartIndex = Math.max(0, startIndex - 2)
  // 可视区能展示的元素的最大个数
  const numVisible = Math.ceil(data.height / data.itemSize)
  // 下缓冲区结束索引
  const endIndex = Math.min(data.itemCount - 1, startIndex + numVisible + 2)
  // 根据上面计算的索引值，不断添加元素给container
  console.log('finialStartIndex', finialStartIndex, endIndex)
  for (let i = finialStartIndex; i < endIndex; i++) {
    data.itemCount++
    console.log('data.itemCount',data.itemCount)
    if (data.itemCount>=data.allList.length) {
      data.itemCount = 0
    }
    data.list.shift()
    data.list.push(data.allList[data.itemCount])
  }
}

// 当触发滚动就重新计算
function onscroll(event) {
  const { scrollTop } = event.currentTarget
  if (scrollTop > data.scrollOffset) {
    getCurrentChildren()
  } else {
  }
  data.scrollOffset = scrollTop
}
</script>
<style lang="less" scoped>
.vnode-list {
  ul {
    height: 100px;
    overflow: auto;
    li {
      height: 20px;
      line-height: 20px;
      text-align: center;
      border-bottom: 1px solid #ccc;
      box-sizing: border-box;
    }
  }
}
</style>
