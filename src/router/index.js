import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/where',
      name: 'where',
      component: HomeView,
    },
    {
      path: '/what',
      name: 'what',
      component: HomeView,
    },
    {
      path: '/who',
      name: 'who',
      component: HomeView,
    },
  ],
});

export default router;
