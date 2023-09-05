# v3-demo

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```




项目开发指引
  1，路由
    /src/router/routers
     目录下  xxx.js     xxx-----模块名称      内部配置和一般路由配置无异，仅作模块化拆分

 
  2，API 接口的调用
     /src/api/apis
       xxxx.js      xxxx----api 模块名称    内部写法按已有的为准
    
    api的使用：
      
      在vue 文件中，默认已自动导入所有api接口，添加第一步之后
      可直接使用如下方式访问  默认可访问 apis 对象
      apis.ansu.getHomeTheme()   ausu===模块名称
                                  getHomeTheme====api方法名称

    api + loading 的控制  注意：请勿同时使用 全局，局部
      全局loading   { loading：loading }   调用api时 data参数添加上一个 ref类型的  loading 参数即可。   注意：多个api应区分不同的loading

      局部loading   { dom: card_dom.value }  调用api时  data参数添加一个 dom 对象，是为需要挂载的loading 目标元素   注意使用 nexttick 或者 onMounted 以免访问不到 dom 对象
  
  
  3，关于组件
     /src/components
     文件夹下所有组件均默认全局注册，无需引入即可使用
     如有新增，参照格式     /src/components/xxxxxx/index.vue   xxxxxx 代表组件名称 大驼峰命名法


     至于业务组件均放在view/模块/components/ 目录下
     使用时须显式引用
  
  4，关于静态资源 图片 img 的使用

     (1), web 网络资源 （须上传至项目cdn 方可使用）
          /src/assets/webImg/xxxxx/index.js        xxxx为模块名称  index.js  内容格式全部统一按已有的进行添加

          使用：
          若在vue文件中   
            template  中使用  
                   $WebImgs.yinxin.demotopbg    ---  $WebImgs 全局挂载对象   -----yinxin 模块名称     ---  demotopbg 图片名称


            script  中使用
                   WebImgs.yinxin.demotopbg     --- WebImgs  对象 会自动引入   其余同理

      (2), 本地资源            
          /src/assets/img/xxxxx/imgname.type        ----- xxxx 图片模块名称   imgname.type   -----图片名称.类型

          使用方法同上
          script  中使用 仅对象不同
              Imgs  可直接使用
          template  中使用   
              $Imgs 可直接使用


  5，关于其他hooks使用 例如   ref，reactive，useRoute，useRouter ……  等
     'vue',  'vue-router'  的 hooks 方法，均可直接使用，已做自动导入处理


 6，views 路由级组件
     src/views/xxxxxx/index.vue     xxxxxx ----- 路由模块名称
     src/views/xxxxxx/components/xxx.vue      xxx.vue  -------  当前模块的 子组件 xxx 组件名称   需显式引入使用
     src/views/xxxxxx/css/xxxx.less   .css     --------  当前模块下的css文件
     src/views/xxxxxx/js/xxxx.js               --------  当前模块下的js文件 


 7，第三方UI组件库 
     vant 4  已按需引入，无需关注