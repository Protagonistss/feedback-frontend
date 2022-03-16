import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    meta: {
      auth: true
    },
    component: () => import("../views/Home.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../components/common/Login.vue")
  },
  {
    path: "*",
    name: "404",
    component: () => import("../components/common/404.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if ((to.meta as any).auth) {
    const state: any = store.state;
    if (state.user.isLogin) {
      next();
    } else {
      next("/login?redirect=" + to.fullPath);
    }
  } else {
    next();
  }
});

export default router;
