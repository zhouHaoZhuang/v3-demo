import HomeView from '../views/HomeView.vue'


export default [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      keepAlive: true,
      title: '首页'
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
      title: '关于'
    }
  },
  {
    path: '/testkeep',
    name: 'testkeep',
    component: () => import('../views/TestKeep.vue'),
    meta: {
      title: '测试缓存'
    }
  },
  {
    path: '/pdftoimg',
    name: 'pdftoimg',
    component: () => import('../views/PdfToImg.vue'),
    meta: {
      title: 'pdf转图片'
    }
  },
  {
    path: '/pdfh5',
    name: 'pdfh5',
    component: () => import('../views/PdfH5.vue'),
    meta: {
      title: 'pdfh5'
    }
  },
  {
    path: '/touchpage',
    name: 'touchpage',
    component: () => import('../views/Touchpage.vue'),
    meta: {
      title: 'touchpage'
    }
  },
  {
    path: '/resaxios',
    name: 'resaxios',
    component: () => import('../views/res.vue'),
    meta: {
      title: 'axios请求'
    }
  },
  {
    path: '/listscoll',
    name: 'listscoll',
    component: () => import('../views/listScoll.vue'),
    meta: {
      title: '列表滚动'
    }
  },
  {
    path: '/vnodelistscoll',
    name: 'vnodelistscoll',
    component: () => import('../views/v-list.vue'),
    meta: {
      title: '虚拟列表滚动'
    }
  },
  {
    path: '/threejs',
    name: 'threejs',
    component: () => import('../views/Three.vue'),
    meta: {
      title: 'threejs 3D模型'
    }
  },
  {
    path: '/choujiang',
    name: 'choujiang',
    component: () => import('../views/ChouJiang.vue'),
    meta: {
      title: 'LuckyWheel 抽奖'
    }
  },
  {
    path: '/tailwind',
    name: 'tailwind',
    component: () => import('../views/Tailwind.vue'),
    meta: {
      title: 'Tailwind css'
    }
  },
]