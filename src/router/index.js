import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Person from '../views/Person.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Person',
      name: 'Person',
      component: () => import('../views/Person.vue')
    },
    {
    path:'/ParkingSpace',
      name: 'ParkingSpace',
      component: () => import('../views/ParkingSpace.vue')
      },
      {
        path: '/res',
        name: 'res',
        component: () => import('../views/res.vue')
      },
  ] 
})

export default router
