//===- education-focus-select.component.ts - EducationFocusSelectComponent -===//
//
// Copyright (c) 2021 J. Morgan Lieberthal
// Licensed under the MIT License
//
//===-----------------------------------------------------------------------===//

import { Component, Prop, Vue } from "vue-property-decorator";
import WithRender from "./education-focus-select.template.html";

import { EducationFocus, Ward, nameOfEducationFocus } from "@/models";

@WithRender
@Component
export default class EducationFocusSelect extends Vue {
  @Prop() ward!: Ward;

  readonly options = [
    EducationFocus.Diplomacy,
    EducationFocus.Martial,
    EducationFocus.Stewardship,
    EducationFocus.Intrigue,
    EducationFocus.Learning
  ].map(focus => {
    return { value: focus, text: nameOfEducationFocus(focus) };
  });
}
