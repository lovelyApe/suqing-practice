<template>
  <div class="login-frame">
    <el-form :model="ruleForm" :rules="rules" ref="formRef" label-width="70px">
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
<script lang="ts">
import { defineComponent, reactive, ref } from '@vue/composition-api';
// import { useStore } from 'vuex';

export default defineComponent({
  name: 'LoginFrame2',
  components: {},
  setup() {
    const ruleForm = reactive<Partial<LoginForm>>({
      name: '',
      password: '',
    });

    // const store = userStore();

    const rules = reactive<Partial<RuleType>>({
      name: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
      password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
    });

    const formRef = ref();

    const submitForm = (formName: string): void => {
      console.log(this, formRef, formName);
      formRef.value.validate(
        (valid: boolean): undefined => {
          if (!valid) return;
          window.localStorage.setItem('userStatus', 'yes');
          // store.commit('updateLoginStatus', true);
        }
      );
    };

    return {
      ruleForm,
      rules,
      formRef,
      submitForm,
    };
  },
});
</script>
<style lang="less" scoped>
.login-frame {
  width: 320px;
  background: #fff;
  padding: 30px 20px;
  border-radius: 10px;
}
</style>
