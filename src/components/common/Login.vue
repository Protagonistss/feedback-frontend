<template>
  <div class="login">
    <button @click="clickLogin(true)">登录</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { namespace } from "vuex-class";
const userModule = namespace("user");
@Component({ name: "login" })
export default class Login extends Vue {
  @userModule.Action("handleLogin") public handleLogin!: Function;
  private clickLogin(status: boolean) {
    this.handleLogin(status).then(() => {
      const redirect: any = this.$route.query.redirect;
      this.$router.push({ path: redirect });
    });
  }
}
</script>

<style scoped></style>
