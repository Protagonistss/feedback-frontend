<template>
  <div class="home">
    <Header></Header>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Header from "@/components/Header.vue";

@Component({
  name: "Home",
  components: { Header }
})
export default class Home extends Vue {}
</script>
