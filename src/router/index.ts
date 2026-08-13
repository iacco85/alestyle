import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/servizi/:slug',
    name: 'service-detail',
    component: () => import('../views/ServiceDetailView.vue'),
    props: true
  }
]
