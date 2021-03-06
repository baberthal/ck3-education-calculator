//===- ward-view.component.ts - Ward View Component ------------------------===//
//
// Copyright (c) 2021 J. Morgan Lieberthal
// Licensed under the MIT License
//
//===-----------------------------------------------------------------------===//

import { Component, Prop, Vue } from "vue-property-decorator";
import WithRender from "./ward-view.template.html";

import { EducationInfo, Ward } from "@/models";

import { IntellectTraitSelect } from "../intellect-trait-select";
import { ChildhoodTraitSelect } from "../childhood-trait-select";
import { EducationFocusSelect } from "../education-focus-select";

@WithRender
@Component({
  components: {
    IntellectTraitSelect,
    ChildhoodTraitSelect,
    EducationFocusSelect
  }
})
export default class WardView extends Vue {
  @Prop() ward!: Ward;
  @Prop() educationInfo!: EducationInfo;
}
