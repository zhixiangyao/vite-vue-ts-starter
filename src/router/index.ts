import { createRouter, createWebHistory } from 'vue-router'

import type { RouteRecordRaw } from '/@/types'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('/@/layouts/index.vue'),
    redirect: () => ({ name: 'Home' }),
    children: [
      {
        path: 'Home',
        name: 'Home',
        component: () => import('/@/views/Home.vue'),
      },
      {
        path: 'FatherChild',
        name: 'FatherChild',
        component: () => import('/@/views/FatherChild.vue'),
      },
      {
        path: 'Tailwind',
        name: 'Tailwind',
        component: () => import('/@/views/Tailwind/index.vue'),
      },
      {
        path: 'TensileColumn',
        name: 'TensileColumn',
        component: () => import('/@/views/TensileColumn.vue'),
      },
      {
        path: 'Particle',
        name: 'Particle',
        component: () => import('/@/views/Particle.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
