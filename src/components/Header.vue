<template>
  <div class="header">
    || header || {{ author }} || {{ welcome }}
    <li v-for="user in users" :key="user.id">{{ user.name }}</li>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { mapState, mapActions, mapGetters } from "vuex";
import { namespace } from "vuex-class";

const headerModule = namespace("header");
@Component({
  name: "Header",
  computed: {
    ...mapState({
      author: (state: any) => state.userInfo.author,
      users: (state: any) => {
        return state.header.allUser;
      }
    }),
    // ...mapGetters("header", ["welcome"])
    ...mapGetters("header", { welcome: "welcome" })
  }
})
export default class Header extends Vue {
  @headerModule.Action("getAllUser") public getAllUser!: Function;
  @headerModule.Action("setHeaderName") public setHeaderName!: Function;
  created() {
    // this.$store.dispatch("header/getAllUser");
    this.getAllUser();
    this.setHeaderName("huang of header");
  }
}
</script>
