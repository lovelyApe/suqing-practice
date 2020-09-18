<template>
  <header class="app-header">
    <div class="name-wrap" @click="goBackHome">
      <div class="logo">
        <img src="../../../public/img/logo.png" alt="" />
      </div>
      <h2 class="name">大剌剌后台管理</h2>
    </div>
    <el-dropdown class="user-wrap" @command="handleCommand">
      <div class="user-info" :split-button="true">
        <el-avatar
          :size="50"
          class="user-avatar"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        />
        <div class="user-name">{{ userName }}</div>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="userInfo">个人信息</el-dropdown-item>
        <el-dropdown-item command="changePwd">更改密码</el-dropdown-item>
        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </header>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Mutation, State } from 'vuex-class';

@Component({
  name: 'AppHeader',
})
export default class AppHeader extends Vue {
  private commandEnum = {
    logout: 'handleLogout',
    userInfo: 'toUserInfo',
    changePwd: 'toChangePwd',
  };

  @Mutation('PajiModule/updateLoginStatus')
  private updateLoginStatus;

  @Mutation('PajiModule/updateUserInfo')
  private updateUserInfo;

  @State(state => state.PajiModule.userInfo.userName) private userName;

  // 触发指令
  private handleCommand(command: string): void {
    this[this.commandEnum[command]]();
  }

  // 退出登录方法
  private handleLogout() {
    window.localStorage.removeItem('userStatus');
    this.updateUserInfo({
      userName: '',
      userId: '',
      userAvatar: '',
    });
    this.updateLoginStatus(false);
    this.$router.go(0);
  }

  // 个人信息
  private toUserInfo() {
    this.$router.push('/userInfo');
  }

  // 修改密码
  private toChangePwd() {
    this.$router.push('/changePwd');
  }

  // 返回首页
  private goBackHome(): void {
    if (this.$route.path !== '/') {
      this.$router.replace('/');
    } else {
      this.$router.go(0);
    }
  }
}
</script>
<style lang="less">
.app-header {
  display: flex;
  width: 100%;
  justify-content: space-between;
  background: #fff;
  box-shadow: 4px 0 4px rgba(0, 0, 0, 0.3);
  .name-wrap {
    height: 60px;
    line-height: 60px;
    display: flex;
    margin-left: 10px;
    cursor: pointer;
    .name {
      margin-left: 10px;
    }
    .logo {
      width: 60px;
      height: 59px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .user-wrap {
    margin-right: 20px;
    .user-info {
      cursor: pointer;
      display: flex;
      line-height: 60px;
      /deep/.user-avatar {
        margin-top: 5px;
      }
      .user-name {
        margin-left: 10px;
      }
    }
  }
}
</style>
