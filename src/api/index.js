const modules = import.meta.glob('./apis/*.js', { eager: true })
let allModules = {}
for (const path in modules) {
  let itemKey = path.match(/[A-z]*[^(^\.\/apis\/)][A-z]*(?=.js)/g)[0]
  // let itemKey = path.replace('./apis/', '').replace('.js', '')
  allModules[itemKey] = modules[path]
}

export default allModules
export { allModules }