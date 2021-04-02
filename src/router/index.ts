import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const TestOnePage = () => import('/@/views/TestOnePage.vue')
const TestTwoPage = () => import('/@/views/TestTwoPage.vue')
const TestThreePage = () => import('/@/views/TestThreePage.vue')
const TestFourPage = () => import('/@/views/TestFourPage')
const TestTensileColumnPage = () => import('/@/views/TestTensileColumnPage.vue')
const TestParticlePage = () => import('/@/views/TestParticlePage.vue')

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: () => ({ name: 'TestOnePage' }) },
  { path: '/demo1', component: TestOnePage, name: 'TestOnePage' },
  { path: '/demo2', component: TestTwoPage, name: 'TestTwoPage' },
  { path: '/demo3', component: TestThreePage, name: 'TestThreePage' },
  { path: '/demo4', component: TestFourPage, name: 'TestFourPage' },
  { path: '/demo5', component: TestTensileColumnPage, name: 'TestTensileColumnPage' },
  { path: '/demo6', component: TestParticlePage, name: 'TestParticlePage' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
