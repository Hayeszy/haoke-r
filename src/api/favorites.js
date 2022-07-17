// 收藏列表请求模块
import request from '@/utils/request'

// 获取收藏列表
export const getFavorites = (token) => {
  return request({
    method: 'GET',
    url: '/user/favorites',
    headers: {
      authorization: token
    }
  })
}
