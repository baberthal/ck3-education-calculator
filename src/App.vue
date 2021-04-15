<template>
  <div id="app">
    <b-container>
      <h1 class="text-center">CK3 Education Calculator</h1>
      <b-row align-h="center">
        <b-card-group deck>
          <guardian-view :guardian="guardian" />
          <ward-view :ward="ward" :educationInfo="educationInfo" />
        </b-card-group>
        <!-- <b-col> -->
        <!-- </b-col> -->
        <!-- <b-col> -->
        <!-- </b-col> -->
      </b-row>
      <b-row align-h="center">
        <b-col>
          <results-view
            :educationProbabilityCalculator="educationProbabilityCalculator"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { GuardianView, ResultsView, WardView } from "./components";
import {
  AcquisitionEventCalculator,
  EducationInfo,
  EducationProbabilityCalculator,
  Guardian,
  Ward
} from "@/models";

@Component({
  components: {
    GuardianView,
    ResultsView,
    WardView
  }
})
export default class App extends Vue {
  educationInfo: EducationInfo = new EducationInfo();
  guardian: Guardian = new Guardian();
  ward: Ward = new Ward();

  acquisitionEventCalculator: AcquisitionEventCalculator = new AcquisitionEventCalculator(
    this.guardian,
    this.ward
  );
  educationProbabilityCalculator: EducationProbabilityCalculator = new EducationProbabilityCalculator(
    this.acquisitionEventCalculator
  );
}
</script>

<style lang="scss">
#app {
  margin-top: 60px;
}
</style>
