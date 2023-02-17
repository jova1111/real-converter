import * as VueRouter from 'vue-router';
import { createApp } from 'vue'
import App from './App.vue'
import CurrencyConverterPage from '@/pages/CurrencyConverterPage.vue';
import TimeConverterPage from '@/pages/TimeConverterPage.vue';

const routes = [
  {
    path: '/',
    component: CurrencyConverterPage
  },
  {
    path: '/time',
    component: TimeConverterPage
  }
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
})

createApp(App).use(router).mount('#app')