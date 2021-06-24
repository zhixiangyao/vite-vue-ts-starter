import { createRouter, createWebHistory } from 'vue-router'

import type { RouteRecordRaw } from '/@/types'

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: () => ({ name: 'TestOnePage' }) },
  {
    path: '/TestOnePage',
    component: () => import('/@/views/TestOnePage.vue'),
    name: 'TestOnePage',
  },
  {
    path: '/TestTwoPage',
    component: () => import('/@/views/TestTwoPage.vue'),
    name: 'TestTwoPage',
  },
  {
    path: '/TestThreePage',
    component: () => import('/@/views/TestThreePage.vue'),
    name: 'TestThreePage',
  },
  {
    path: '/TestTailwindrPage',
    component: () => import('/@/views/TestTailwindrPage/index.vue'),
    name: 'TestTailwindrPage',
  },
  {
    path: '/TestTensileColumnPage',
    component: () => import('/@/views/TestTensileColumnPage.vue'),
    name: 'TestTensileColumnPage',
  },
  {
    path: '/TestParticlePage',
    component: () => import('/@/views/TestParticlePage.vue'),
    name: 'TestParticlePage',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
