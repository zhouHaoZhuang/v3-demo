import request from '@/utils/request.js'


export const getHomeData = (params) => {
  return request({
    url: "/data.json",
    method: "get",
    params,
  });
}



export const getHomeTheme = (data) => request('/home_theme', data)
export const getHomeHotel = (data) => request('/home_hotel', data)
export const getRankHotel = (data) => request('/rank_hotel', data)
export const getHotelStrategyList = (data) => request(`/strategy_list/${data.id}`, data)
export const getNearType = (data) => request('/near_type', data)
export const getNearList = (data) => request('/near_list', data)
export const getRank = (data) => request(`/rank/${data.id}`, data)
export const getHotelCondition = (data) => request('/hotel_condition', data)
export const getHotelList = (data) => request('/hotel_list', data)
export const getHotelStrategyDetail = (data) => request(`/hotel_strategy_detail/${data.id}`, data)


export const getHotelcollect = (data) => request(`/hotel_collect`, data, 'post')
export const getHotelCancelcList = (data) => request(`/hotel_cancel_collect`, data, 'post')

export const getSceniDetail = (data) => request(`/scenic_detail/${data.id}`, data)
export const getHotelDetail = (data) => request(`/hotel_detail/${data.id}`, data)


export const getStrategyList = (data) => request(`/strategy_list/${data.id}`, data)
export const getStrategyDetail = (data) => request(`/strategy_detail/${data.id}`, data)
export const getScenicTheme = () => request(`/scenic_theme`)
export const getScenicCondition = () => request(`/scenic_condition`)
export const getScenicList = (data) => request(`/scenic_list`, data)
