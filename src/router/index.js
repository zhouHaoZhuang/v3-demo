import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: {
      }
    },
    {
      path: '/testkeep',
      name: 'testkeep',
      component: () => import('../views/TestKeep.vue'),
      meta: {
      }
    },
    {
      path: '/pdftoimg',
      name: 'pdftoimg',
      component: () => import('../views/PdfToImg.vue'),
      meta: {
      }
    },
    {
      path: '/pdfh5',
      name: 'pdfh5',
      component: () => import('../views/PdfH5.vue'),
      meta: {
      }
    }
  ]
})

export default router
