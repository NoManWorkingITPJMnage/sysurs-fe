import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import BasicLayout from '@/components/BasicLayout.vue';
import store from '@/store';
import { Toast } from '@/plugins/ToastPlugin';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/signin',
    name: 'SignIn',
    component: () => import('@/views/SignIn.vue'),
  },
  {
    path: '/',
    name: 'BasicLayout',
    component: BasicLayout,
    async beforeEnter(to, from, next) {
      try {
        await store.dispatch('user/fetchProfile');
        Toast.$toast('登录成功，欢迎回来！', 2000);
        next();
      } catch (_error) {
        next('/signin');
      }
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
