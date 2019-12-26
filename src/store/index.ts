import Vue from "vue";
import Vuex from "vuex";
import header from "./modules/header";
import user from "./modules/user";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {
      author: "protagonisths@gmail.com"
    }
  },
  modules: {
    header,
    user
  }
});
