import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/dashboard' },
    { path: '/dashboard', component: () => import('@/layout/AppDashboard.vue') },
    { path: '/tasks', component: () => import('@/layout/AppTasks.vue') },
  ],
})

export default router
