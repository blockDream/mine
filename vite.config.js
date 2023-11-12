import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// 引入 element UI
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// 为 Element Plus 按需引入样式。
import ElementPlus from 'unplugin-element-plus/vite'
import path from 'path';

function resolve(dir) {
  return path.join(__dirname, dir);
}

export default defineConfig({
  server: {
    host: '0.0.0.0',
  },
  resolve: {
    alias: {
      '@': resolve('src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/css/utils.scss";',
      },
    },
  },
  plugins: [vue(),
     // ...
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    ElementPlus({
      // options
    })
  ],
});
