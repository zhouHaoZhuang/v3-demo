import { defineAsyncComponent } from 'vue'
const components = import.meta.glob('./*/index.vue')  

export default function install (app) {
  for (const [key, value] of Object.entries(components)) {
    const name = key.match(/\.\/(.*)\/index\.vue$/)[1]
    app.component(name, defineAsyncComponent(value))
  }
}
