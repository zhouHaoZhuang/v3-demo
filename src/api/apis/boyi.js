import request from '@/utils/request.js'
export const getFacilityHome = (data) => request('/facility_home', data)
export const getFacilityDetail = (data) => request(`/facility_detail/${data.id}`, data)
export const getFacilityCate = () => request(`/facility_cate`)
export const getFacilityList = (data) => request(`/facility_list`,data)




