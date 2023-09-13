import axios from 'axios'

let baseURL = import.meta.env.VITE_BASEURL || '' + '/'

let request = axios.create({
  baseURL,
  timeout: 1000,
  retry: 3, // 设置重试次数
  headers: {
    'Content-Type': 'application/json',
  } //自定义请求头
})
/* 
    无感刷新与请求拦截器

*/

let refreshing = false;
const queue = [];


request.interceptors.request.use(
  // 发送请求前做些什么
  (config) => {
    config.headers.authorization = 'Brarer' + localStorage.getItem('access_token')
    return config
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
    // 状态码
    let { statusCode } = response
    // 为了节省多余的代码，这里仅展示处理状态码为401的情况
    // if (statusCode === 401) {
    //   refreshToken()
    // }
    return response.data
  },
  // 请求失败做些什么  超出1000毫秒就返回错误信息
  async (error) => {
    let { data, config } = error.response;

    if (refreshing) {
      return new Promise((resolve) => {
        queue.push({
          config,
          resolve
        })
      })
    }

    if (data.statusCode === 401 && !config.url.includes('/refresh')) {

      const res = await refreshToken();

      if (res.status === 200) {

        queue.forEach(({ config, resolve }) => {
          resolve(request(config))
        });

        return request(config);
      } else {
        alert(data || '登录过期，请重新登录');
      }
    } else {
      return error.response;
    }
  }
)

async function refreshToken () {
  const res = await request.get('/refresh', {
    params: {
      token: localStorage.getItem('refresh_token')
    }
  });
  localStorage.setItem('access_token', res.data.accessToken);
  localStorage.setItem('refresh_token', res.data.refreshToken);
  return res;
}
export default request