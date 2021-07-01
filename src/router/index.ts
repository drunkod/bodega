import { createWebHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import VillaCobete from '../views/VillaCobete.vue'
import NewPayment from '../views/VillaCobete/Payments/New.vue'
import NewExpense from '../views/VillaCobete/Expenses/New.vue'
import MortgageSimulation from '../views/VillaCobete/MortgageSimulation.vue'
import store from '../store'

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
    name: 'New Payment',
    component: NewPayment,
    meta: {
      requiresAuth: true,
      layout: 'DefaultLayout',
    },
  },
  {
    path: '/villacobete/expenses/new',
    name: 'New Expense',
    component: NewExpense,
    meta: {
      requiresAuth: true,
      layout: 'DefaultLayout',
    },
  },
  {
    path: '/villacobete/simulation',
    name: 'Mortgage Simulation',
    component: MortgageSimulation,
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

/* router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.getters.isLoggedIn) {
      console.log(store.getters.isLoggedIn)
      console.log('FALSE')
      next({ name: 'Login' })
    } else {
      next() // go to wherever I'm going
    }
  } else {
    next() // does not require auth, make sure to always call next()!
  }
}) */

export default router
