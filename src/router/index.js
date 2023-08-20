import { createRouter, createWebHistory } from 'vue-router'
import {useAuthStore} from "@/stores/user/auth";
const AuthStore = useAuthStore()
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      component : () => import('@/layouts/main.vue'),
      children :[
        {
          path: '/dashboard',
          name: 'dashboard',
          component : () => import  ('@/views/dashboard.vue'),
        }
      ]

    },
    {
      path: '/',
      component : () => import('@/layouts/auth.vue'),
      children :[
        {
          path: '/reg',
          name: 'reg',
          component : () => import  ('@/views/auth/reg.vue'),
        },
        {
          path: '/login',
          name: 'login',
          component : () => import ('@/views/auth/login.vue')
        }
      ]

    }

  ]
})
router.beforeEach((to, from, next) => {
  if( to.name !== 'login' || to.name !== 'reg' ) {
    AuthStore.checkUser()
  }
})
export default router
