import Vue from 'vue'
import Router from 'vue-router'

// import Login from '@/pages/Login/template.vue'

Vue.use(Router)

/* 
const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
*/

const router = new Router({
  routes:[
    {
      path:'/',
      component:() => import('@/pages/Index/template.vue')
    }
  ]
})

// 路由守卫
router.beforeEach((to,from,next) => {
    next()  //确保next() 一定要调用
})

export default router;