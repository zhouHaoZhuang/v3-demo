<template>
  <div>
    <van-uploader :after-read="afterRead"
                  :before-read="beforeRead"
                  v-model="fileList.imgList"
                  :multiple="maxCount != 1"
                  :max-count="maxCount"
                  :deletable='deletable'
                  :disabled="disabled"
                  :max-size="maxSize * 1024 * 1024"
                  :preview-size="`${previewSize / 37.5}rem`"
                  :accept="fileType.accept"
                  @oversize="onOversize"
                  @click-preview="clickPreview">
      <slot>
        <div class="up-input">
          <van-icon color="#dcdee0"
                    name="photograph" />
        </div>
      </slot>
      <template v-if="newDeleteIcon" #preview-delete>
        <van-image :src="newDeleteIcon" class="newdel" width="18" height="18"></van-image>
      </template>
    </van-uploader>
  </div>
</template>

<script setup>
import { reactive, watch } from 'vue'
import axios from 'axios'
import { Toast } from 'vant';
import { fileReview } from "@/utils/file.js";
import { BASEURL } from "@/utils/request.js";

const props = defineProps({
  maxSize: {  //文件大小  单位 ： Mb
    type: Number,
    default: 2
  },
  maxCount: {  // 文件数量
    type: Number,
    default: 1
  },
  previewSize: {  // 预览图大小  单位 px  类型Number
    type: Number,
    default: 80
  },
  imgList: {  // 展示图片列表， 用于默认展示 使用  结构示例：[{url:'http://sgdjashgdjasdj'},{url:'http://sgdjashgdjasdj'}]   url: 图片地址
    type: Array,
    default: []
  },
  deletable: {  // 是否默认展示删除按钮
    type: Boolean,
    default: true// 默认展示
  },
  disabled: {  //是否禁用文件上传
    type: Boolean,
    default: false// 默认不禁用
  },
  fileIndex: {  //自定义文件标识
    type: Number,
    default: 0
  },
  label: {  //自定义label标识
    type: String,
    default: ''
  },
  fileType: {  //文件类型 默认image类型   file类型: ".doc,.docx,.pdf"   mix类型：".jpg,.jpeg,.png,.doc,.docx,.pdf"
    type: Object,
    default: {
      type: 'image',
      accept: ".jpg,.jpeg,.png"
    }
  },
  newDeleteIcon:{
    type:String,
    default:'',
  }
})

const emit = defineEmits(['changeImage'])

const fileList = reactive({
  imgList: [],
  thisImageUrl: []
});
fileList.imgList = props.imgList

const onOversize = (file) => {
  Toast(`文件大小不能超过 ${props.maxSize}M`);
};
const beforeRead = (file) => {
  // console.log(file);
  let fileList = Array.isArray(file) ? file : [file]
  const imgformat = /image\/(png|jpg|jpeg)$/;
  const docformat = /application\/(doc|docx|msword|vnd.openxmlformats-officedocument.wordprocessingml.document|pdf)$/

  for (let index = 0; index < fileList.length; index++) {
    if (props.fileType.type == 'image') {
      if (!imgformat.test(fileList[index].type)) {
        Toast('请上传 jpg/jpeg/png 格式文件')
        return false
      }
    } else if (props.fileType.type == 'file') {
      if (!docformat.test(fileList[index].type)) {
        Toast('请上传 doc/docx/pdf 格式文件')
        return false
      }
    }
    return true
  }
}

const afterRead = (file) => {
  // console.log(file);
  let formdata = new FormData();
  if (Array.isArray(file)) { // 多选
    file.forEach((item) => {
      formdata.append('file[]', item.file)
      formdata.append('type[]', item.file.type.split('/')[0] == 'image' ? item.file.type.split('/')[0] : 'document')
    })
    upFile(formdata, true)
  } else {  // 单文件
    formdata.append('file', file.file)
    let type = file.file.type.split('/')[0] == 'image' ? file.file.type.split('/')[0] : 'document'
    formdata.append('type', type)
    upFile(formdata)
  }
};

function clickPreview (file) {
  // console.log(file, 'jdkasjka');
  if (!file.url) {
    Toast('暂不可查看')
    return
  }
  fileReview(file.url)
}

function upFile (data, isMultiple) {
  fileList.imgList.forEach((item, index) => {
    if (!item.url) {
      item.status = 'uploading'
      item.message = '上传中...'
    }
  })
  axios({
    method: "post",
    url: `${BASEURL}${isMultiple ? '/upload_more' : '/upload'}`,
    data,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }).then((res) => {
    // console.log(res);
    let dataList = Array.isArray(res.data.data) ? res.data.data : [res.data.data]
    fileList.imgList.forEach((item, index) => {
      if (!item.url) {
        item.url = dataList[0].showUrl
        item.saveUrl = dataList[0].saveUrl
        item.id = Date.now()
        item.showUrl = dataList[0].showUrl
        item.status = 'done'
        item.message = '上传完成'
        dataList.splice(0, 1)
      }
    })
    // fileList.thisImageUrl = [...fileList.thisImageUrl, ...res.data.data]
  }).catch((err) => {
    fileList.imgList.forEach((item, index) => {
      if (!item.url) {
        item.url = ''
        item.saveUrl = ''
        item.id = Date.now()
        item.showUrl = ''
        item.status = 'failed'
        item.message = '上传失败'
      }
    })
    console.log(err.message);
  })
}

watch(() => fileList.imgList, () => {
  // console.log('监听imgList', fileList.imgList)
  emit('changeImage', fileList.imgList, props.fileIndex, props.label)
}, {
  deep: true
})

watch(() => props.imgList, () => {
  // console.log('监听props')
  fileList.imgList = props.imgList
}, {
  deep: true
})

</script>

<style lang="less" scoped>
.up-input {
  background-color: #f7f8fa;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

// // 上传多张图片，不重叠
// .submit-box .uploadFiles-a {
//   height: unset;
//   min-height: 2.02667rem;
// }
.newdel {
  position: absolute;
  top: 2px;
  right: 2px;
}
</style>