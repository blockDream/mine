import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue'),
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home.vue'),
  },
  {
    path: '/vehiclePositionSys',
    name: 'vehiclePositionSys',
    component: () => import('@/views/components/carPositionSys/index.vue'),
  },
];

const hash = createWebHashHistory();
const router = createRouter({
  history: hash,
  routes,
});

export default router;
