<template>
  <div class="app-menu">
    <el-menu
      :default-active="defaultActive"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      :default-openeds="[defaultActive.split('-')[0]]"
      :unique-opened="true"
      @select="handleSelectMenu"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">业务概览</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>个人信息</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">个人信息</el-menu-item>
          <el-menu-item index="2-2">更改密码</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">项目列表</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

@Component({
  name: 'AppMenu',
})
export default class AppMenu extends Vue {
  private routeEnum = {
    '/': '1',
    '/userInfo': '2-1',
    '/changePwb': '2-2',
    '/projectList': '3',
    '/projectDetail': '3',
  };

  private indexEnum = {
    '1': '/',
    '2-1': '/userInfo',
    '2-2': '/changePwb',
    '3': '/projectList',
  };

  private defaultActive = '1';

  @Watch('$route', { immediate: true, deep: true })
  private handleChangeRoute(val) {
    this.defaultActive = this.routeEnum[val.path];
  }

  private handleSelectMenu(index) {
    if (this.$route.path !== this.indexEnum[index]) {
      this.$router.push(this.indexEnum[index]);
    }
  }
}
</script>
<style lang="less" scoped>
.el-menu-vertical-demo {
  height: calc(100vh - 60px);
}
</style>
