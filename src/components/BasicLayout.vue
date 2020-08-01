<template>
  <router-view />
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'basic-layout',
})
export default class BasicLayout extends Vue { }

</script>
