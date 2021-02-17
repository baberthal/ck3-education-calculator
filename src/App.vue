<template>
  <div id="app">
    <b-container>
      <h1 class="text-center">CK3 Education Calculator</h1>
      <b-row>
        <b-col>
          <guardian-view :guardian="guardian" />
        </b-col>
        <b-col>
          <ward-view :ward="ward" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { GuardianView, WardView } from "./components";
import { Character } from "@/models";

@Component({
  components: {
    GuardianView,
    WardView
  }
})
export default class App extends Vue {
  guardian: Character = new Character();
  ward: Character = new Character();
}
</script>

<style lang="scss">
#app {
  margin-top: 60px;
}
</style>
