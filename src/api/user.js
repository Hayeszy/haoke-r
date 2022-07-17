/**
 * 用户相关请求模块
 */
import request from '@/utils/request'
import store from '@/api/user'

export const login = (username, password) => {
  return request({
    url: '/user/login',
    method: 'POST',
    data: { username, password }
  })
}

/**
 * 获取用户自己的信息
 */
export const getUserInfo = () => {
  return request({
    url: '/user',
    headers: {
      Authorization: `Bearer ${store.state.user.token}`
    }
  })
}

// /**
//  * 获取用户频道列表
//  */
// export const getUserChannels = () => {
//   return request({
//     method: 'GET',
//     url: '/app/v1_0/user/channels'
//   })
// }
