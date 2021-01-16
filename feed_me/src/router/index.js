import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../Views/HomePage.vue'
import Cook from '../Views/Cook.vue'
import CookResult from '../Views/CookResult.vue'
import Order from '../Views/Order.vue'
import OrderResult from '../Views/OrderResult.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/cook',
    name: 'Cook',
    component: Cook
  },
  {
    path: '/cookResult',
    name: 'CookResult',
    component: CookResult
  },
  {
    path: '/order',
    name: 'Order',
    component: Order
  },
  {
    path: '/orderResult',
    name: 'OrderResult',
    component: OrderResult
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
