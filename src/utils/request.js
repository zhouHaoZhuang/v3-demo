import axios from 'axios'

let baseURL = '/'
let request = axios.create({
  baseURL,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  } //自定义请求头
})

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
  (response) => {
    return response.data
  },
  // 请求失败做些什么  超出1000毫秒就返回错误信息
  (error) => {
    return Promise.reject(error)
  }
)
export default request