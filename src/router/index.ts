import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const TestOnePage = () => import('/@/views/TestOnePage.vue')
const TestTwoPage = () => import('/@/views/TestTwoPage.vue')
const TestThreePage = () => import('/@/views/TestThreePage.vue')
const TestFourPage = () => import('/@/views/TestFourPage.vue')

const routes: RouteRecordRaw[] = [
  { path: '/', component: TestOnePage, name: 'TestOnePage' },
  { path: '/demo2', component: TestTwoPage, name: 'TestTwoPage' },
  { path: '/demo2', component: TestThreePage, name: 'TestThreePage' },
  { path: '/demo2', component: TestFourPage, name: 'TestFourPage' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
