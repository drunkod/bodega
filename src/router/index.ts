import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import VillaCobete from '@/views/VillaCobete.vue'
import New from '@/views/VillaCobete/Payments/New.vue'
// import store from '../store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true,
      layout: 'DefaultLayout',
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      layout: 'AuthLayout',
    },
  },
  {
    path: '/villacobete',
    name: 'VillaCobete',
    component: VillaCobete,
    meta: {
      requiresAuth: true,
      layout: 'DefaultLayout',
    },
  },
  {
    path: '/villacobete/payments/new',
    name: 'New',
    component: New,
    meta: {
      requiresAuth: true,
      layout: 'DefaultLayout',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

//TODO Fix this!
/* router.beforeEach((to, from, next) => {
  if (to.matched.some((route) => route.meta.requiresAuth)) {
    if (!store.state.user.loggedIn) {
      next({ name: 'Login' })
    } else next()
  } else {
    next()
  }
}) */

export default router
