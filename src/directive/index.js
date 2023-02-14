
// export default (app) => {
//   app.directive('isYlLogin', { // 未登录跳转登陆的指令
//     mounted: function (elem, binding) {
//       // console.log(elem, binding);
//       let { fn, type } = binding.value
//       elem.onclick = () => {
//         if (!getToken()) {
//           Toast('请登陆')
//           ylRouter.push('/yllogin')
//           return
//         }
//         fn(type)
//       }
//     },
//   })
// }

const vant = {
  install: function (Vue) {
    // 此处可以使用vue实例
    console.log(Vue);
  }
}

export default vant

