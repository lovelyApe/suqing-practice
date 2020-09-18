<template>
  <div class="app-footer">
    <div>@copyRight Paji</div>
    <div>all right reserved</div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'AppFooter',
})
export default class AppFooter extends Vue {}
</script>
<style lang="less" scoped>
.app-footer {
  display: flex;
  justify-content: center;
  line-height: 60px;
  background: #fff;
}
</style>
