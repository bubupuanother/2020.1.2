import services from '@/services/api'
import { request, get } from '@/utils/request'

// 获取图片列表数据
export const login = options => {
  return {
    type: 'SAVE_TOKEN',
    payload: request(services.dologin, options),
  }
}



