
export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
    meta: {
      alive: true,  // 是否缓存
      title: '详情',
      auth: true,
      cname: 'Declare'  // 缓存组件name  注意： 组件内部暴露名称和当前配置一致
    },
  }
]
