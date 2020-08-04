<template>
  <div class="list-layout">
    <div
      v-for="data of dataSource"
      :key="data.res_id"
      class="res-card"
    >
      <div class="card-row">
        <span class="res-name">{{ data.res_name }}</span>
      </div>
      <div class="card-row">
        <span class="folder-name">{{ data.folder_name }}/</span>
      </div>
      <div class="card-row">
        <span class="uploader">FROM {{ data.uploader }}</span>
        <a class="icon-button" :href="data.link" :download="data.res_name">
          <v-icon name="cloud-download-alt" scale="1.5"></v-icon>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.width-limited-text {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.list-layout {
  display: flex;
  flex-direction: column;
  .res-card {
    display: flex;
    flex-direction: column;
    padding: 16px 32px 0 32px;
    border-bottom: 1px, solid, #606060;
    .card-row {
      display: flex;
      align-items: center;
      margin-bottom: 16px;
      .res-name {
        font-weight: lighter;
        font-size: 18px;
        line-height: 1em;
        .width-limited-text;
      }
      .folder-name {
        font-weight: lighter;
        font-size: 16px;
        line-height: 1em;
        .width-limited-text;
      }
      .uploader {
        font-weight: bolder;
        font-size: 16px;
        line-height: 1em;
        .width-limited-text;
      }
    }
  }
}
</style>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Icon from 'vue-awesome/components/Icon.vue';
import 'vue-awesome/icons/cloud-download-alt';

@Component({
  name: 'resource-list',
})
export default class ResourceList extends Vue {
  @Prop() dataSource: Array<Resource> = [];
}
</script>