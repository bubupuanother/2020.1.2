import services from '@/services/api'
import { get } from '@/utils/request'

// 获取图片列表数据
export const getMenu = () => {
  return {
    type: 'MENU_DATA',
    payload: get(services.menu),
  }
}

// 分类详情
export const getMenuDetail = option => {
  return {
    type: 'MENU_DATA_DETAIL',
    payload: get(services.show, option),
  }
}



