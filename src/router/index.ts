import { createRouter, createWebHistory } from 'vue-router';
import Body from '../views/Body.vue';
import Portfolio from '../views/Portfolio.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Body
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio
  },
  
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
