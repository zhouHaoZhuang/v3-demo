import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import postCssPxToRem from 'postcss-pxtorem'

// https://vitejs.dev/config/
export default ({ mode }) => {
  return defineConfig({
    plugins: [
      vue(),
      Components({
        resolvers: [VantResolver()],
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
    },
    css: {
      postcss: {
        plugins: [
          postCssPxToRem({
            rootValue: 37.5, // 1rem的大小
            propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
            exclude: 'index.html'
          })
        ]
      }
    },
    server: {
      proxy: {
        '/api': {
          target: 'https://www.xxxx.com/', // 后端服务实际地址
          changeOrigin: true, //支持跨域 切换主机名
          rewrite: (path) => path.replace(/^\/api/, ""),
        }
      }
    },
    build: {
      outDir: "dist",
      assetsDir: "./public",
      minify: 'terser',
      rollupOptions: {
        output: {
          chunkFileNames: 'public/js/[name]-[hash].js',
          entryFileNames: 'public/js/[name]-[hash].js',
          assetFileNames: 'public/[ext]/[name]-[hash].[ext]',
        }
      },
      terserOptions: {
        compress: {
          drop_console: loadEnv(mode, process.cwd()).VITE_MYENV == 'production',
          drop_debugger: loadEnv(mode, process.cwd()).VITE_MYENV == 'production'
        }
      },
      // cssTarget: 'chrome61',
    },
  })
}

