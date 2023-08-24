<template>
  <div @click="openPdfReview">
    打开pdf文件
  </div>
  <canvas v-for="page in pdfPages"
          :key="page"
          :id="'pdf-canvas' + page" />
</template>

<script>
// import "@/utils/build/pdf.js";
import { reactive } from "vue";

const pdfPages = reactive([])

function openPdfReview(params) {
  
}

// 此处是v2写法
// window['pdfjs-dist/build/pdf'].GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.2.146/pdf.worker.js";



// export default {
//   name: "Contract",
//   data: function () {
//     return {
//       pdfPages: [], //页数
//       pdfWidth: "", // 宽度
//       pdfSrc: '', //地址
//       pdfDoc: "", //文档内容
//       pdfScale: 1, //放大倍数
//       contractUrl: '', //后端返回的PDF链接
//     }
//   },
//   mounted () {
//     this.getData()
//   },
//   methods: {
//     openPdfReview () {
//       location.href = 'http://127.0.0.1:5173/web/viewer.html?file=tesss.pdf'
//     },
//     getData () {
//       this.loadFile('https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf')
//     },
//     loadFile (url) {
//       // this.$Loading.show()
//       let loadingTask = pdfjsLib.getDocument(url);
//       loadingTask.promise.then(pdf => {
//         console.log(pdf);
//         let num = 1
//         let that = this
//         pdf.getPage(1).then(page => {
//           let canvas = document.getElementById("pdf-canvas" + num);
//           let ctx = canvas.getContext("2d");
//           let dpr = window.devicePixelRatio || 1;
//           let ratio = dpr;
//           // screen.availWidth 屏幕可用宽度
//           let viewport = page.getViewport({ scale: screen.availWidth / page.getViewport({ scale: this.pdfScale }).width })
//           // console.log(viewport,'-----viewport')
//           canvas.width = viewport.width * ratio;
//           canvas.height = viewport.height * ratio;

//           canvas.style.width = viewport.width + "px";
//           canvas.style.height = viewport.height + 'px'

//           that.pdfWidth = viewport.width + "px";

//           ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
//           // 将 PDF 页面渲染到 canvas 上下文中
//           let renderContext = {
//             canvasContext: ctx,
//             viewport: viewport
//           };
//           page.render(renderContext);
//           if (this.pdfPages > num) {
//             this.renderPage(num + 1);
//           }
//         });
//         this.pdfPages = pdf.numPages;
//         // this.$nextTick(() => {
//         //   // this.renderPage(1);
//         // });
//       }).catch(err => {
//         console.log(err, 'loadingTask err')
//       });
//     },
//     renderPage (num) {
//       // const that = this;
//       // this.pdfDoc.
//     },
//   }
// }

/* 以下是 vue3 写法 */

// import "@/utils/pdfjs/pdf.min.js";
// import { ref } from "vue";
// import { useRoute } from "vue-router";
// import { useShowToast, useNoneToast } from '@/utils/toast.js'
// 此处是v2写法
window['pdfjs-dist/build/pdf'].GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.2.146/pdf.worker.js";



export default {
  name: "Contract",
  data: function () {
    return {
      pdfPages: [], //页数
      pdfWidth: "", // 宽度
      pdfSrc: '', //地址
      pdfDoc: "", //文档内容
      pdfScale: 1, //放大倍数
      contractUrl: '', //后端返回的PDF链接
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    openPdfReview () {
      location.href = 'http://127.0.0.1:5173/web/viewer.html?file=tesss.pdf'
    },
    getData () {
      this.loadFile('https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf')
    },
    loadFile (url) {
      // this.$Loading.show()
      let loadingTask = pdfjsLib.getDocument(url);
      loadingTask.promise.then(pdf => {
        console.log(pdf);
        let num = 1
        let that = this
        pdf.getPage(1).then(page => {
          let canvas = document.getElementById("pdf-canvas" + num);
          let ctx = canvas.getContext("2d");
          let dpr = window.devicePixelRatio || 1;
          let ratio = dpr;
          // screen.availWidth 屏幕可用宽度
          let viewport = page.getViewport({ scale: screen.availWidth / page.getViewport({ scale: this.pdfScale }).width })
          // console.log(viewport,'-----viewport')
          canvas.width = viewport.width * ratio;
          canvas.height = viewport.height * ratio;

          canvas.style.width = viewport.width + "px";
          canvas.style.height = viewport.height + 'px'

          that.pdfWidth = viewport.width + "px";

          ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
          // 将 PDF 页面渲染到 canvas 上下文中
          let renderContext = {
            canvasContext: ctx,
            viewport: viewport
          };
          page.render(renderContext);
          if (this.pdfPages > num) {
            this.renderPage(num + 1);
          }
        });
        this.pdfPages = pdf.numPages;
        // this.$nextTick(() => {
        //   // this.renderPage(1);
        // });
      }).catch(err => {
        console.log(err, 'loadingTask err')
      });
    },
    renderPage (num) {
      // const that = this;
      // this.pdfDoc.
    },
  }
}

/* 以下是 vue3 写法 */

// import "@yunlv/utils/pdfjs/pdf.min.js";
// import { ref } from "vue";
// import { useRoute } from "vue-router";
// import { useShowToast, useNoneToast } from '@yunlv/utils/toast.js'
// window['pdfjs-dist/build/pdf'].GlobalWorkerOptions.workerSrc = "/app/web/pdf.worker.min.js";
// const $route = useRoute()

// const pdfPages = ref('') //页数
// const pdfWidth = ref('') // 宽度
// const pdfSrc = ref('') //地址
// const pdfDoc = ref('')  //文档内容
// const pdfScale = ref(1) //放大倍数
// const contractUrl = ref('') //后端返回的PDF链接

// const digit = ref('1')

// let pdfObj = {}
// getData()
// function getData () {
//   if ($route.query.file) {
//     loadFile($route.query.file)
//   }else{
//     loadFile('https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf')
//   }
// }
// function loadFile (url) {
//   useShowToast()
//   let loadingTask = pdfjsLib.getDocument(url);
//   loadingTask.promise.then(pdf => {
//     console.log(pdf);
//     pdfDoc.value = pdf;
//     pdfObj = pdf;
//     pdfPages.value = pdf.numPages;
//     // let num = 1
//     changePage(1)
//   })
// }
// function changePage (num) {
//   pdfObj.getPage(num).then(page => {
//     let canvas = document.getElementById("pdf-canvas" + num);
//     let ctx = canvas.getContext("2d");
//     let dpr = window.devicePixelRatio || 1;
//     let ratio = dpr;
//     // screen.availWidth 屏幕可用宽度
//     let viewport = page.getViewport({ scale: screen.availWidth / page.getViewport({ scale: pdfScale.value }).width })
//     canvas.width = viewport.width * ratio;
//     canvas.height = viewport.height * ratio;
//     canvas.style.width = viewport.width + "px";
//     canvas.style.height = viewport.height + 'px'
//     pdfWidth.value = viewport.width + "px";
//     useNoneToast()
//     ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
//     // 将 PDF 页面渲染到 canvas 上下文中
//     let renderContext = {
//       canvasContext: ctx,
//       viewport: viewport
//     };
//     page.render(renderContext);
//   }).catch(err => {
//     console.log(err, 'loadingTask err')
//   });
// }

</script>

<style>
</style>