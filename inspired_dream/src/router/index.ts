import { createRouter, createWebHistory } from 'vue-router'

import BlogView from '@/view/BlogView.vue';
import AboutView from '@/view/AboutView.vue';
import HomeView from '@/view/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/blogs',
      name : 'blogs',
      component: BlogView
    },
    {
      path: '/about',
      name : 'about',
      component: AboutView
    },
  ]
})

export default router
