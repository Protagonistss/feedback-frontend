import { AllUser } from "@/api";
import { HEADER } from "@/store/mutation-types";

const state = {
  allUser: []
};

const getters = {};

const actions = {
  getAllUser(obj: any) {
    AllUser((users: any) => {
      obj.commit(HEADER.GET_USERINFO, users);
    });
  }
};

const mutations = {
  [HEADER.GET_USERINFO](state: any, users: any[]) {
    state.allUser = users;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
