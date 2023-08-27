import { createRouter, createWebHistory } from 'vue-router'


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
import { useAuthStore } from "../stores/user/auth.js";
router.beforeEach((to,from,next)=> {
  if(['login','reg'].includes(to.name)) 
  next()
  else {
   
    const authStore = useAuthStore()
    authStore.checkUser()
  }
})

export default router
