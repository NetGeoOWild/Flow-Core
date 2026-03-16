import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/dashboard' },
    { path: '/dashboard', component: () => import('@/layout/AppDashboard.vue') },
    { path: '/tasks', component: () => import('@/layout/AppTasks.vue') },
  ],
})

export default router
