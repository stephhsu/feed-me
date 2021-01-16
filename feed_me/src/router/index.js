import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../Views/HomePage.vue'
import Cook from '../Views/Cook.vue'
import CookResult from '../Views/CookResult.vue'
import Order from '../Views/Order.vue'
import OrderResult from '../Views/OrderResult.vue'
import NotFound from "../Views/NotFound.vue"
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
<<<<<<< HEAD
    path: '/cookResult',
=======
    path: '/cook-result',
>>>>>>> 499f7cd3796a9c1f6a7c6f8e3b27e9526679f490
    name: 'CookResult',
    component: CookResult
  },
  {
    path: '/order',
    name: 'Order',
    component: Order
  },
  {
<<<<<<< HEAD
    path: '/orderResult',
=======
    path: '/order-result',
>>>>>>> 499f7cd3796a9c1f6a7c6f8e3b27e9526679f490
    name: 'OrderResult',
    component: OrderResult
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
