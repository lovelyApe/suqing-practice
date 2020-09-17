<template>
  <div class="login-frame">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="70px">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password" type="password"></el-input>
      </el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
    </el-form>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import { Mutation } from 'vuex-class';

@Component({
  name: 'LoginFrame',
})
export default class LoginFrame extends Vue {
  @Mutation('PajiModule/handleUpdateLoginStatus') private handleUpdateLoginStatus;

  private ruleForm: Partial<LoginForm> = {
    name: '',
    password: '',
  }

  private rules: Partial<RuleType> = {
    name: [
      { required: true, message: '请输入用户名', trigger: 'blur' },
    ],
    password: [
      { required: true, message: '请输入密码', trigger: 'blur' },
    ],
  }

  private submitForm(formName: string): void {
    (this.$refs[formName] as HTMLFormElement).validate((valid: boolean): undefined => {
      if (!valid) return;
      window.localStorage.setItem('userStatus', 'yes');
      this.$message.success('登录成功');
      this.handleUpdateLoginStatus(true);
    });
  }
}
</script>
<style lang="less" scoped>
  .login-frame{
    width: 320px;
    background: #fff;
    padding: 30px 20px;
    border-radius: 10px;
  }
</style>
