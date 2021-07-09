import { createRouter, createWebHistory } from 'vue-router'

import type { RouteRecordRaw } from '/@/types'

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: () => ({ name: 'TestHelloWorld' }) },
  {
    path: '/TestHelloWorld',
    component: () => import('/@/views/TestHelloWorld.vue'),
    name: 'TestHelloWorld',
  },
  {
    path: '/TestFatherChild',
    component: () => import('/@/views/TestFatherChild.vue'),
    name: 'TestFatherChild',
  },
  {
    path: '/TestRouteLeave',
    component: () => import('/@/views/TestRouteLeave.vue'),
    name: 'TestRouteLeave',
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
