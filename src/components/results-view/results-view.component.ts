//===- results-view.component.ts - ResultsView Component -------------------===//
//
// Copyright (c) 2021 J. Morgan Lieberthal
// Licensed under the MIT License
//
//===-----------------------------------------------------------------------===//

import { Component, Prop, Vue } from "vue-property-decorator";
import WithRender from "./results-view.template.html";

import { EducationProbabilityCalculator } from "@/models";

@WithRender
@Component
export default class ResultsView extends Vue {
  @Prop() educationProbabilityCalculator!: EducationProbabilityCalculator;

  get probabilities() {
    return this.educationProbabilityCalculator.probabilities;
  }
}
