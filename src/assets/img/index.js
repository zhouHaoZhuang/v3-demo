const modules = import.meta.glob('./*/*', { eager: true })
let imgs = {}
for (const path in modules) {
  const name = path.match(/\.\/(.*)\/(.*)\.(png|jpg|jpeg|svg)$/)[2]
  const mold = path.match(/\.\/(.*)\/(.*)/)[1]
  if (!imgs[mold]) {
    imgs[mold] = {}
  }
  imgs[mold][name] = modules[path].default
}
export default imgs
export { imgs }