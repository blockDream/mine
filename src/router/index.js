import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue'),
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home.vue'),
  },
];

const hash = createWebHashHistory();
const router = createRouter({
  history: hash,
  routes,
});

export default router;
