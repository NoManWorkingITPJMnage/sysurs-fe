<template>
  <div class="main-layout">
    <div class="left-actions">
      <slot name="left-actions"></slot>
    </div>
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="right-actions">
      <slot name="right-actions"></slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
.main-layout {
  position: fixed;
  top: 0;
  background-color: #606060;
  color: white;
  font-size: 18px;
  display: flex;
  .left-actions {
    display: flex;
    align-items: center;
  }
  .right-actions {
    display: flex;
    align-items: center;
  }
  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
  }
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'top-bar',
})
export default class TopBar extends Vue {}
</script>
