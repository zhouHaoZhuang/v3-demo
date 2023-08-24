import request from '@/utils/request.js'

export const getHomeTheme = (data) => request('/home_theme', data)
export const getHomeHotel = (data) => request('/home_hotel', data)
