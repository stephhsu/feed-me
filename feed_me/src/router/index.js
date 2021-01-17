import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../Views/HomePage.vue'
import Cook from '../Views/Cook.vue'
import CookResult from '../Views/CookResult.vue'
import Order from '../Views/Order.vue'
import OrderResult from '../Views/OrderResult.vue'
import NotFound from "../Views/NotFound.vue"
import Recipe from '../Views/Recipe.vue'
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
    path: '/cook-result',
    name: 'CookResult',
    component: CookResult,
    props: true
  },
  {
    path:'/recipe',
    name: 'Recipe',
    component: Recipe,
    props: true
  },
  {
    path: '/order',
    name: 'Order',
    component: Order
  },
  {
    path: '/order-result',
    name: 'OrderResult',
    component: OrderResult,
    props: true
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
