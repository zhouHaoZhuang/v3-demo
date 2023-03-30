import axios from 'axios'

let baseURL = import.meta.env.VITE_BASEURL || '' + '/'

let request = axios.create({
  baseURL,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  } //自定义请求头
})
// 最大重发次数
const MAX_ERROR_COUNT = 5;
// 当前重发次数
let currentCount = 0;
// 缓存请求队列
const queue = [];
// 当前是否刷新状态
let isRefresh = false;


request.interceptors.request.use(
  // 发送请求前做些什么
  (config) => {
    // console.log('request', config)
    config.headers.token = '12345'
    return config
  },
  (error) => {
    // 发送请求失败做些什么
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  // 请求成功做些什么
  // 1000 毫秒后返回结果 的状态码为200的话就返回数据，否则返回错误信息
  async (response) => {
    // 状态码
    let { statusCode } = response
    // 为了节省多余的代码，这里仅展示处理状态码为401的情况
    if (statusCode === 401) {
      refreshToken()
    }
    return response.data
  },
  // 请求失败做些什么  超出1000毫秒就返回错误信息
  (error) => {
    return Promise.reject(error)
  }
)

async function refreshToken () {
  /**
   * token 无感刷新
   * https://github.com/QC2168/axios-bz/blob/main/Interceptors/hooks/refreshToken.ts
   */

  // accessToken失效
  // 判断本地是否有缓存有refreshToken
  const refreshToken = sessionStorage.get('refresh') ?? null;
  if (!refreshToken) {
    clearAuth();
  }
  // 提取请求的配置
  const { config } = error;
  // 判断是否refresh失败且状态码401，再次进入错误拦截器
  if (config.url?.includes('refresh')) {
    clearAuth();
  }
  // 判断当前是否为刷新状态中（防止多个请求导致多次调refresh接口）
  if (!isRefresh) {
    // 设置当前状态为刷新中
    isRefresh = true;
    // 如果重发次数超过，直接退出登录
    if (currentCount > MAX_ERROR_COUNT) {
      clearAuth();
    }
    // 增加重试次数
    currentCount += 1;

    try {
      const {
        data: { access },
      } = await UserAuthApi.refreshToken(refreshToken);
      // 请求成功，缓存新的accessToken
      sessionStorage.set('token', access);
      // 重置重发次数
      currentCount = 0;
      // 遍历队列，重新发起请求
      queue.forEach((cb) => cb(access));
      // 返回请求数据
      return ApiInstance.request(error.config);
    } catch {
      // 刷新token失败，直接退出登录
      console.log('请重新登录');
      sessionStorage.clear();
      window.location.replace('/login');
      return Promise.reject(error);
    } finally {
      // 重置状态
      isRefresh = false;
    }
  } else {
    // 当前正在尝试刷新token，先返回一个promise阻塞请求并推进请求列表中
    return new Promise((resolve) => {
      // 缓存网络请求，等token刷新后直接执行
      queue.push((newToken) => {
        // Reflect.set(config.headers!, 'authorization', newToken);
        // @ts-ignore
        // resolve(ApiInstance.request < ResponseDataType < any >> (config));
      });
    });
  }
}
export default request