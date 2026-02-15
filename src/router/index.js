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
   
    component: () => import('../views/employee.vue')
  },
  {
    path: '/Add_customer',
    name: 'Add_customer',
   
    component: () => import('../views/Add_customer.vue')
  },

  {
    path: '/contact',
    name: 'contact',
   
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/add_employee',
    name: 'add_employee',
   
    component: () => import('../views/add_employee.vue')
  },
   {
    path: '/product',
    name: 'product',
   
    component: () => import('../views/Product.vue')
  },
{
    path: '/product_api',
    name: 'product_api',
   
    component: () => import('../views/product_api.vue')
  },
{
    path: '/show_product',
    name: 'show_product',
   
    component: () => import('../views/show_product.vue')
  },
  {
    path: '/Customer_crud',
    name: 'Customer_crud',
   
    component: () => import('../views/Customer_crud.vue')
  },
  {
  path: '/employee_crud',
  name: 'Employee_crud',
  component: () => import('../views/employee_crud.vue') // แก้เป็น e ตัวเล็กให้ตรงกับชื่อไฟล์จริง
},
{
  path: '/product_edit',
  name: 'product_edit',
  component: () => import('../views/product_edit.vue')
},
{
  path: '/employee_crud_image',
  name: 'employee_crud_image',
  component: () => import('../views/employee_crud_image.vue')
}





]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router