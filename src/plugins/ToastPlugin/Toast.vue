<template>
  <div :class="{
      toast: true,
      open: isOpened,
      close: !isOpened,
    }">
    {{ text }}
  </div>
</template>

<style lang="less" scoped>
.toast {
  opacity: 0.8;
  background-color: #000;
  position: fixed;
  bottom: 0;
  transition: transform ease 1s;
  min-width: 30px;
  color: white;
  left: 50%;
  font-size: 14px;
  padding: 8px 12px;
  white-space: nowrap;
}
.open {
  transform: translate(-50%, -12px)
}
.close {
  transform: translate(-50%, 100%);
}
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'toast',
})
export default class Toast extends Vue {
  text = '';

  isOpened = false;

  open(text: string, delay?: number) {
    if (this.isOpened) {
      this.close();
    }
    this.text = text;
    if (delay) {
      setTimeout(() => {
        this.close();
      }, delay);
    }
    this.isOpened = true;
  }

  close() {
    this.isOpened = false;
    setTimeout(() => {
      this.text = '';
    }, 1000);
  }
}

</script>
