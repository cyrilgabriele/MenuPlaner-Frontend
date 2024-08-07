import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import WeeklyMenu from '../views/WeeklyMenu.vue';
import Profile from '../views/Profile.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/meal-plans', component: WeeklyMenu },
  { path: '/profile', component: Profile }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), 
  routes,
});

export default router;
