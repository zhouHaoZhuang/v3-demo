import { createRouter, createWebHistory } from 'vue-router'
import routes from "./config";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
