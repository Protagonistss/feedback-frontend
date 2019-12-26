export default (store: any) => {
  if (localStorage) {
    let auth: any = localStorage.getItem("auth");
    const user: any = JSON.parse(auth);
    if (user) {
      store.commit("user/login", user);
    }
  }

  // subscribe of store about mutation.  like react action.type
  store.subscribe((mutation: any, state: any) => {
    if (mutation.type === "user/login") {
      localStorage.setItem("auth", JSON.stringify(state.user.isLogin));
    }
  });
};
