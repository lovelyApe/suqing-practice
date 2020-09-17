<template>
  <div class="login">
    <LoginFrame class="login-frame" />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LoginFrame from '@/components/loginFrame/index.vue';

@Component({
  name: 'Login',
  components: {
    LoginFrame,
  },
})
export default class Login extends Vue {}
</script>
<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}
</style>
