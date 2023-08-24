import { Toast } from 'vant';
import $router from '@/router';
import { isMobile } from "./login";

/**
 * word文件预览
 * @param {String} url 文件链接
 * @returns 
 */
function wordReview (url) {
  if (!url) {
    Toast('暂不可查看')
    return
  }
  window.open(`http://view.officeapps.live.com/op/view.aspx?src=${encodeURIComponent(url)}`)
}

/**
 * pdf文件预览
 * @param {String} url 文件链接
 * @returns 
 */
function pdfReview (url) {
  if (!url) {
    Toast('暂无链接')
    return
  }
  if (isMobile()) {
    // $router.push({
    //   path: '/ylpdfreview',
    //   query: {
    //     file: encodeURIComponent(url)
    //   }
    // })
  } else (
    window.open(url)
  )
}

/**
 * 文件预览
 * @param {String} url 文件链接
 */
export function fileReview (url) {
  const urlType = url.toLowerCase()
  if (urlType.includes('doc')) {
    wordReview(url)
  }
  else if (urlType.includes('pdf')) {
    pdfReview(url)
  }
}