import request from '@/utils/request.js'

const getHomeData = (params) => {
  return request({
    url: "/data.json",
    method: "get",
    params,
  });
}


export {
  getHomeData
}