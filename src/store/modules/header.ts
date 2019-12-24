import { AllUser } from "@/api";
import { HEADER } from "@/store/mutation-types";

const state = {
  allUser: [],
  headerName: ""
};

const getters = {
  welcome: (state: any) => "欢迎来到" + state.headerName
};

const actions = {
  getAllUser(ctx: any) {
    AllUser((users: any) => {
      ctx.commit(HEADER.GET_USERINFO, users);
    });
  },
  setHeaderName(ctx: any, headerName: string) {
    ctx.commit(HEADER.SET_HEADERNAME, headerName);
  }
};

const mutations = {
  [HEADER.GET_USERINFO](state: any, users: any[]) {
    state.allUser = users;
  },
  [HEADER.SET_HEADERNAME](state: any, headerName: string) {
    state.headerName = headerName;
  }
};

export default {
  namespaced: true,
  getters,
  state,
  actions,
  mutations
};
