//===- childhood-trait-select.component.ts - ChildhoodTrait Select ---------===//
//
// Copyright (c) 2021 J. Morgan Lieberthal
// Licensed under the MIT License
//
//===-----------------------------------------------------------------------===//

import { Component, Prop, Vue } from "vue-property-decorator";
import WithRender from "./childhood-trait-select.template.html";

import { Ward, ChildhoodTrait, nameOfChildhoodTrait } from "@/models";

@WithRender
@Component
export default class ChildhoodTraitSelect extends Vue {
  @Prop() ward!: Ward;
  @Prop() kind!: string;

  readonly options = [
    ChildhoodTrait.Bossy,
    ChildhoodTrait.Charming,
    ChildhoodTrait.Curious,
    ChildhoodTrait.Pensive,
    ChildhoodTrait.Rowdy
  ].map(trait => {
    return { value: trait, text: nameOfChildhoodTrait(trait) };
  });

  get formGroupId(): string {
    return `${this.kind}-childhood-trait-group`;
  }

  get selectBoxId(): string {
    return `${this.kind}-childhood-trait`;
  }
}
