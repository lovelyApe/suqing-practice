interface PajiState {
  loginStatus: boolean,
  userInfo: Partial<UserInfo>,
}

type UserInfo = {
  userName: string,
  userId: string,
  userAvatar: string,
}

interface LoginForm {
  name: string,
  password: string,
}

type RuleItemType = {
  required: boolean,
  message: string,
  trigger: string
}

type RuleType = {
  name: Partial<RuleItemType>[],
  password: Partial<RuleItemType>[],
};

declare module 'monaco-editor-vue';

declare module 'echarts';
