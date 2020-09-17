<template>
  <div id="app" :key="hasLogin">
    <Layout v-if="hasLogin">
      <template v-slot:header>
        header
      </template>
      <template v-slot:menu>menu</template>
      <template v-slot:main>
        <router-view />
      </template>
      <template v-slot:footer>footer</template>
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

@Component({
  name: 'App',
  components: {
    Layout,
    Login,
  },
})
export default class App extends Vue {
  @Getter('PajiModule/hasLogin') private hasLogin;

  @Mutation('PajiModule/updateLoginStatus')
  private updateLoginStatus;

  private mounted() {
    console.log(this.$route);
    this.checkLogin();
  }

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
}
</style>
