const modules = import.meta.glob('./apis/*.js', { eager: true })
let allModules = {}
for (const path in modules) {
  let itemKey = path.replace('./apis/', '').replace('.js', '')
  allModules[itemKey] = modules[path]
}

export default allModules