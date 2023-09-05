import { showLoadingToast, allowMultipleToast } from 'vant';
allowMultipleToast();
/**
 * 显示 多个toast 提示
 */
export function useShowToast () {
  return showLoadingToast({
    message: '加载中...',
    forbidClick: true,
  })
}

/**
 * 隐藏 多个toast 提示  与上面的对应
 * @param {} Object 单个Toast对象
 */
export function useNoneToast (toastObj) {
  toastObj.close();
}


