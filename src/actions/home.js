import services from '@/services/api'
import { request, get } from '@/utils/request'
import { createActions } from 'redux-actions'

// 获取图片列表数据
export const getIScrollImages = () => {
  return {
    type: 'GET_IMAGES',
    payload: request(services.slide),
  }
}

// 首页导航
export const getNavs = () => {
  return {
    type: 'NAVS',
    payload: get(services.nav),
  }
}

// 获取商品列表数据
export const getCommodity = () => {
  return {
    type: 'GNC_COMMODITY_HPP',
    payload: get(services.goodsLevel),
  }
}

// 获取商品列表数据
export const setData = options => {
  return {
    type: 'DATA',
    payload: options,
  }
}

// 测试
export const getCeshi = options => {
  return {
    type: 'CESHI',
    payload: request(services.listWithPage),
  }
}

// export const getCeshi = createActions({
//   CESHI: options => request(services.listWithPage),
// })
// options => {
//   return {
//     type: 'CESHI',
//     payload: request(services.listWithPage),
//   }
// }

// loding
export const loading = options => {
  return (dispath) => {
    dispath({
      type: 'LODING',
      payload: options,
    })
  }
}
