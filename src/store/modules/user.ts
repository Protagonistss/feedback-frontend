import { USER } from "../mutation-types";

const state = {
  isLogin: false
};
const getters = {};

const actions = {
  handleLogin(ctx: any, status: boolean) {
    ctx.commit(USER.LOGIN, status);
  }
};

const mutations = {
  [USER.LOGIN](state: any, status: boolean) {
    state.isLogin = status;
    console.log(this);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
