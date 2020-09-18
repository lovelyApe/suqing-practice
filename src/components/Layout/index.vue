<template>
  <el-container style="height: 100vh">
    <el-header>
      <slot name="header"></slot>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <slot name="menu"></slot>
      </el-aside>
      <el-container>
        <el-main>
          <slot name="main"></slot>
        </el-main>
        <el-footer>
          <slot name="footer"></slot>
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'Layout',
})
export default class Layout extends Vue {}
</script>
<style lang="less" scoped>
/deep/.el-header,
.el-footer {
  padding: 0 !important;
}
/deep/.el-main {
  height: calc(100vh - 120px);
  overflow-y: auto;
}
</style>
