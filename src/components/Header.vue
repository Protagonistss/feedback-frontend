<template>
  <div class="header">
    header{{ author }}
    <li v-for="user in users" :key="user.id">{{ user.name }}</li>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { mapState } from "vuex";
@Component({
  name: "Header",
  computed: {
    ...mapState({
      author: (state: any) => state.userInfo.author,
      users: (state: any) => {
        return state.header.allUser;
      }
    })
  }
})
export default class Header extends Vue {
  created() {
    this.$store.dispatch("header/getAllUser");
  }
}
</script>
