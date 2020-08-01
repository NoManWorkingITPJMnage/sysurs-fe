import Vue from 'vue'

declare module "vue/types/vue" {
  interface Vue {
    $toast: (text: string, delay?: number) => void;
  }
}