import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/customer',
    name: 'customer',
   
    component: () => import('../views/customer.vue')
  },
  {
    path: '/type',
    name: 'type',
   
    component: () => import('../views/type.vue')
  },
  {
    path: '/employees',
    name: 'employees',
   
    component: () => import('../views/employees.vue')
  },

  {
    path: '/contact',
    name: 'contact',
   
    component: () => import('../views/Contact.vue')
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router