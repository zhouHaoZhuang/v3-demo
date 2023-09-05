import request from '@/utils/request.js'

export const getHomeTheme = (data) => request('/data.json', data)
export const getHomeHotel = (data) => request('/data.json', data)
