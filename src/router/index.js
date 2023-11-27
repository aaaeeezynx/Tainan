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
      path: '/HomeView',
      name: 'HomeView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/HomeView.vue')
    },
    {
    path: '/Attration1',
      name: 'Attration1',
      component: () => import('../views/Attration1.vue')
    },
    {
      path: '/Person',
      name: 'Person',
      component: () => import('../views/Person.vue')
    },
  ] 
})

export default router
