<template>
  <div id="app">
    <b-container>
      <h1 class="text-center">CK3 Education Calculator</h1>
      <b-row>
        <b-col>
          <guardian-view :guardian="guardian" />
        </b-col>
        <b-col>
          <ward-view :ward="ward" :educationInfo="educationInfo" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { GuardianView, WardView } from "./components";
import { EducationInfo, Guardian, Ward } from "@/models";

@Component({
  components: {
    GuardianView,
    WardView
  }
})
export default class App extends Vue {
  educationInfo: EducationInfo = new EducationInfo();
  guardian: Guardian = new Guardian();
  ward: Ward = new Ward();
}
</script>

<style lang="scss">
#app {
  margin-top: 60px;
}
</style>
