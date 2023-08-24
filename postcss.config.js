module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 16, // 根元素字体大小 (可以根据设计稿自行调整)   tailwindcss 默认是 16px 故这里也是 16
      propList: ['*'], // 需要转换的属性，这里设置为全部 (*)
      selectorBlackList: [], // 忽略转换的选择器，可以使用正则表达式来匹配 (如 ['body'])
      exclude: 'index.html',
      unitPrecision: 5, // 转换后的小数精度
      mediaQuery: false, // 是否转换媒体查询中的单位
      minPixelValue: 0, // 小于这个值的单位不会被转换
    },
  },
}
