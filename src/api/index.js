
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000/api/'

axios.interceptors.response.use(function (response) {
  // Do something with response data
  // if(response)
  return response.data
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})

export function getCategoryKinds (id) {
  return axios.get(`category/getCateKindsRight?id=${id}`)
}

export function getCategoryMenu () {
  return axios.get('category/getCateMenuLeft')
}
// 导出首页的导航栏
export function getNavbara () {
  return axios.get('getNavbara')
}
export function getNavbarb () {
  return axios.get('getNavbarb')
}
export function getNavbarc () {
  return axios.get('getNavbarc')
}
export function getNavbard () {
  return axios.get('getNavbard')
}
export function getNavbare () {
  return axios.get('getNavbare')
}
export function getNavbarf () {
  return axios.get('getNavbarf')
}

// 导出特卖的导航栏
export function getBuybara () {
  return axios.get('getBuybara')
}
export function getBuybarb () {
  return axios.get('getBuybarb')
}
export function getBuybarc () {
  return axios.get('getBuybarc')
}
export function getBuybard () {
  return axios.get('getBuybard')
}
export function getBuybare () {
  return axios.get('getBuybare')
}
export function getBuybarf () {
  return axios.get('getBuybarf')
}
// 购物车
export function getCart () {
  return axios.get('getCart')
}
// 购物车为你推荐列表
export function getForyou () {
  return axios.get('getForyou')
}

// 列表页
export function getSales () {
  return axios.get('getSales')
}
// export function getLists () {
//   return axios.get('getLists')
// }
export function getPrices () {
  return axios.get('getPrices')
}
export function getDefault () {
  return axios.get('getDefault')
}
