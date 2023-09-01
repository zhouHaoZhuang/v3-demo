const modules = import.meta.glob('./*/*', { eager: true })
let imgs = {}
for (const path in modules) {
  const mold = path.match(/\.\/(.*)\/(.*)/)[1]
  modules[path].default.forEach(element => {
    const name = element.split('.')[0]
    if (!imgs[mold]) {
      imgs[mold] = {}
    }
    imgs[mold][name] = `${import.meta.env.VITE_OSSIMGURL}/${mold}/${element}`
  });
}
export default imgs
export { imgs }