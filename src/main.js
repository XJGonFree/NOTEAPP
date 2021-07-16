import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';

import './index.css'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

import { registerSW } from 'virtual:pwa-register'

const updateSW = registerSW({
  onNeedRefresh() {
    // show a prompt to user
  },
  onOfflineReady() {
    // show a ready to work offline to user
  },
})

createApp(App).use(ElementPlus).use(router).use(store).mount('#app')
