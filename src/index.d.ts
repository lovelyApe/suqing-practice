interface PajiState {
  loginStatus: boolean,
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
