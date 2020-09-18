<template>
  <div id="app" :key="hasLogin">
    <Layout v-if="hasLogin">
      <template v-slot:header>
        <AppHeader />
      </template>
      <template v-slot:menu><AppMenu /></template>
      <template v-slot:main>
        <router-view />
      </template>
      <template v-slot:footer>
        <AppFooter />
      </template>
    </Layout>
    <div v-if="!hasLogin">
      <Login />
    </div>
  </div>
</template>
<script lang="ts">
import Layout from '@/components/Layout/index.vue';
import { Component, Vue } from 'vue-property-decorator';
import { Getter, Mutation } from 'vuex-class';
import Login from './views/login.vue';
import AppHeader from '@/components/header/index.vue';
import AppFooter from '@/components/footer/index.vue';
import AppMenu from '@/components/menu/index.vue';

@Component({
  name: 'App',
  components: {
    Layout,
    Login,
    AppHeader,
    AppFooter,
    AppMenu,
  },
})
export default class App extends Vue {
  // 是否登录的状态
  @Getter('PajiModule/hasLogin') private hasLogin;

  // 更新登录状态的mutation
  @Mutation('PajiModule/updateLoginStatus')
  private updateLoginStatus;

  private mounted() {
    this.checkLogin();
  }

  // 检查是否最近登录
  private checkLogin() {
    const loginStatus = window.localStorage.getItem('userStatus');
    this.updateLoginStatus(loginStatus === 'yes');
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}
</style>
