<style>
.smallImg {
  width: 5%;
  height: auto;
}
</style>
<template>
  <v-card>
    <v-card-title>Socle Vue.JS</v-card-title>
    <v-card-text>Socle Vue.JS 3</v-card-text>
    <v-card-component>
      <img class="smallImg" src="../assets/logo.png" />
    </v-card-component>
  </v-card>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {}
</script>
