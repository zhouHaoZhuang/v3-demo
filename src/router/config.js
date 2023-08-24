const modules = import.meta.glob('./routers/*.js', { eager: true })
let routes = []
for (const path in modules) {
  routes = [...routes, ...modules[path].default]
}
// console.log('routes', routes)
export default routes