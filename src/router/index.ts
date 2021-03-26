import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const TestOnePage = () => import('/@/views/TestOnePage.vue')
const TestTwoPage = () => import('/@/views/TestTwoPage.vue')
const TestThreePage = () => import('/@/views/TestThreePage.vue')
const TestFourPage = () => import('/@/views/TestFourPage/index')
const TensileColumn = () => import('/@/views/TensileColumn.vue')
const Particle = () => import('/@/views/Particle/index.vue')

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: () => ({ name: 'TestOnePage' }) },
  { path: '/demo1', component: TestOnePage, name: 'TestOnePage' },
  { path: '/demo2', component: TestTwoPage, name: 'TestTwoPage' },
  { path: '/demo3', component: TestThreePage, name: 'TestThreePage' },
  { path: '/demo4', component: TestFourPage, name: 'TestFourPage' },
  { path: '/demo5', component: TensileColumn, name: 'TensileColumn' },
  { path: '/demo6', component: Particle, name: 'Particle' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
