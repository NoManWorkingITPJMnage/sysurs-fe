import Vue from 'vue';
import ToastPlugin from '@/plugins/ToastPlugin';
import App from './App.vue';
import router from './router';
import store from './store';
import './global-style.less';

Vue.config.productionTip = false;
Vue.use(ToastPlugin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
