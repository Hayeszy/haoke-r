// 房屋管理列表请求模块
import request from '@/utils/request'

// 获取房屋管理列表
export const getRent = (token) => {
  return request({
    method: 'GET',
    url: '/user/houses',
    headers: {
      authorization: token
    }
  })
}
