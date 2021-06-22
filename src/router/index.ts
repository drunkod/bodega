import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((route) => route.meta.requiresAuth)) {
    console.log(store.state.user.loggedIn)
    if (store.state.user.loggedIn) next()
    else next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
