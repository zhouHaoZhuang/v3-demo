import axios from 'axios'

let baseURL = import.meta.env.VITE_BASEURL || '' + '/'

let reqList = []

let request = axios.create({
  baseURL,
  timeout: 1000,
  retry: 3, // 设置重试次数
  headers: {
    'Content-Type': 'application/json',
  } //自定义请求头
})
request.defaults.retry = 2;
request.defaults.retryDelay = 1000;
// 最大重发次数
const MAX_ERROR_COUNT = 5;
// 当前重发次数
let currentCount = 0;
// 缓存请求队列
const queue = [];
// 当前是否刷新状态
let isRefresh = false;

let isBreak = true

let num = 1

request.interceptors.request.use(
  // 发送请求前做些什么
  (config) => {
    console.log('request  请求 成功 拦截器', isBreak, config)
    // config.headers.token = '12345'
    // if (isBreak) {
    //   isBreak = false
    //   config.message = '请求中断'
    //   return Promise.reject({ config })
    // } else {
    setTimeout(() => {
      // if (reqList.length) {
      //   console.log('reqList 模拟token刷新成功', reqList)
      //   reqList.forEach(cn => cn())
      //   reqList = []
      // }
    }, 5 * 1000);
    num++
    console.log('num', num)
    if (num <= 3) {
      config.message = '请求中断'
      return Promise.reject({ config })
    } else {
      config.message = undefined
      return config
    }
    // }
  },
  (error) => {
    // 发送请求失败做些什么
    console.log('error request 请求失败 拦截器', error)
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  // 请求成功做些什么
  // 1000 毫秒后返回结果 的状态码为200的话就返回数据，否则返回错误信息
  async (response) => {
    console.log('response 响应 成功 拦截器', response)
    return response.data
  },
  // 请求失败做些什么  超出1000毫秒就返回错误信息
  (err) => {
    console.log('err', err)
    let config = err.config
    console.log('config', config)
    let backoff = new Promise(function (resolve) {
      setTimeout(function () {
        resolve()
      }, 100)
    })
    console.log('重新请求')
    isBreak = false

    return new Promise((resolve) => {
      // 将resolve放进队列，用一个函数形式来保存，等token刷新后直接执行
      reqList.push(() => {
        request(config).then((val) => {
          resolve(val)
        })
        // resolve(request(config));
      });
    })
    if (!isBreak) {
      // return request(config)
    } else {
      // isBreak = !isBreak
      return backoff.then(function () {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            //    axios 使用注意 该处返回reject  实际使用便是catch 该处返回 resolve 实际使用便是 then
            if (config.url == '/page') {
              resolve({
                name: '正确的信息'
              })
            }
            reject({
              name: '错误的信息'
            })
          }, 2000);
        })
      })
    }
  }
)

export default request