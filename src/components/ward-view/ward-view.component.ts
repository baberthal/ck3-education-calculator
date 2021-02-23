//===- ward-view.component.ts - Ward View Component ------------------------===//
//
// Copyright (c) 2021 J. Morgan Lieberthal
// Licensed under the MIT License
//
//===-----------------------------------------------------------------------===//

import { Component, Prop, Vue } from "vue-property-decorator";
import WithRender from "./ward-view.template.html";

import { Ward, EducationFocus, nameOfEducationFocus } from "@/models";
import { IntellectTraitSelect } from "../intellect-trait-select";
import { ChildhoodTraitSelect } from "../childhood-trait-select";

@WithRender
@Component({
  components: {
    IntellectTraitSelect,
    ChildhoodTraitSelect
  }
})
export default class WardView extends Vue {
  @Prop() ward!: Ward;

  get educationFocusOptions() {
    return [
      EducationFocus.Diplomacy,
      EducationFocus.Martial,
      EducationFocus.Stewardship,
      EducationFocus.Intrigue,
      EducationFocus.Learning
    ].map(focus => {
      return { value: focus, text: nameOfEducationFocus(focus) };
    });
  }
}
