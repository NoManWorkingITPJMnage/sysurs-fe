import { VueConstructor } from 'vue/types/umd';
import Toast from './Toast.vue';

const instance = new Toast({
  el: document.createElement('div'),
});

document.body.appendChild(instance.$el);

class ToastPlugin {
  static $toast(text: string, delay: number) {
    (instance as any).open(text, delay);
  }

  public install(Vue: VueConstructor) {
    Vue.prototype.$toast = ToastPlugin.$toast;
  }
}

export default new ToastPlugin();

export { ToastPlugin as Toast };
