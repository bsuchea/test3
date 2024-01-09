import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/testComputedProperties',
      name: 'testComputedProperties',
      component: () => import('../views/testComputedProperty.vue')
    },
    {
      path: '/usingModel',
      name: 'usingModel',
      component: () => import('../views/usingModel.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/Blog.vue')
    }
  ]
})

export default router
