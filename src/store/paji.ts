import { MutationTree, ActionTree, GetterTree, Module } from 'vuex';

interface RootState {} // eslint-disable-line

const state: PajiState = {
  loginStatus: false,
  userInfo: {
    userName: '张三',
    userId: '23323232',
    userAvatar: '',
  },
};

const getters: GetterTree<PajiState, RootState> = {
  hasLogin(state): boolean {
    return state.loginStatus;
  },
};

const mutations: MutationTree<PajiState> = {
  updateLoginStatus(state, data) {
    state.loginStatus = data;
  },

  updateUserInfo(state, data) {
    state.userInfo = data;
  },
};

const actions: ActionTree<PajiState, RootState> = {};

const PajiModule: Module<PajiState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export default PajiModule;
