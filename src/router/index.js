import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login')
  },
  {
    path: '/',
    component: () => import('@/views/Layout'),
    redirect: '/ ',
    children: [
      {
        path: '/ ',
        name: 'home',
        component: () => import('@/views/Home')
      },
      {
        path: '/findroom',
        name: 'findroom',
        component: () => import('@/views/FindRoom')
      },
      {
        path: '/info',
        name: 'info',
        component: () => import('@/views/Info')
      },
      {
        path: '/my',
        name: 'my',
        component: () => import('@/views/My')
      }
    ]
  },
  {
    path: '/myfavorites',
    name: 'myfavorites',
    component: () => import('@/views/MyFavorites')
  }
]

const router = new VueRouter({
  routes
})

export default router
