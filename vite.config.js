import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/app/web/',
  plugins: [
    vue(
      {
        reactivityTransform: true, // 主要是开启这个，就能使用语法糖了 $ref 不加value
      }
    ),
    Components(
      {
        resolvers: [VantResolver()],
      }
    )
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
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
      external: ['vue', 'vue-router', 'axios'],
      output: {
        // 配置外部依赖库的 CDN 地址
        globals: {
          vue: 'Vue',
          'vue-router': 'VueRouter',
          axios: 'axios'
        },
        chunkFileNames: 'public/js/[name]-[hash].js',
        entryFileNames: 'public/js/[name]-[hash].js',
        assetFileNames: 'public/[ext]/[name]-[hash].[ext]',
      }
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      }
    }
  },
})
