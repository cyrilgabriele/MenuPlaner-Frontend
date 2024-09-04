import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import WeeklyMenu from '../views/WeeklyMenu.vue'
import Profile from '../views/Profile.vue'
import Callback from '@/views/Callback.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/meal-plans', component: WeeklyMenu },
  { path: '/profile', component: Profile },
  { path: '/callback', component: Callback}
]

const router = createRouter({
  // TODO: BAE_URL not defined in .env... => introduce config file here befor refactoring
  history: createWebHistory(import.meta.env.BASE_URL), 
  routes,
})

export default router
