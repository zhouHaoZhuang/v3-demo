
export default (app) => {
  app.directive('touch', { // 未登录跳转登陆的指令
    mounted: function (el, binding) {
      let startX
      let startY
      el.addEventListener('touchstart', function (e) {
        startX = e.touches[0].clientX
        startY = e.touches[0].clientY
      })
      el.addEventListener('touchend', function (e) {
        let endX = e.changedTouches[0].clientX
        let endY = e.changedTouches[0].clientY
        let direction = getDirection(startX, startY, endX, endY)
        if (direction === binding.arg) {
          binding.value && binding.value()
        }
      }, false)
      function getDirection (startX, startY, endX, endY) {
        let diffX = endX - startX
        let diffY = endY - startY
        let absX = Math.abs(diffX)
        let absY = Math.abs(diffY)
        let direction = ''
        if (absX >= absY) {
          direction = diffX > 0 ? 'right' : 'left'
        } else {
          direction = diffY > 0 ? 'down' : 'up'
        }
        return direction
      }
    },
  })
}


