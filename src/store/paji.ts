import { MutationTree, ActionTree, GetterTree, Module } from 'vuex';

interface RootState {} // eslint-disable-line

const state: PajiState = {
  loginStatus: false,
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
