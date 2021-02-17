//===- ward-view.component.ts - Ward View Component ------------------------===//
//
// Copyright (c) 2021 J. Morgan Lieberthal
// Licensed under the MIT License
//
//===-----------------------------------------------------------------------===//

import { Component, Prop, Vue } from "vue-property-decorator";
import WithRender from "./ward-view.template.html";

import {
  Character,
  IntellectTrait,
  nameOfIntellectTrait,
  ChildhoodTrait,
  nameOfChildhoodTrait,
  EducationFocus,
  nameOfEducationFocus
} from "@/models";

@WithRender
@Component
export default class WardView extends Vue {
  @Prop() ward!: Character;

  get intellectTraitOptions() {
    return [
      IntellectTrait.Imbecile,
      IntellectTrait.Stupid,
      IntellectTrait.Slow,
      IntellectTrait.None,
      IntellectTrait.Quick,
      IntellectTrait.Intelligent,
      IntellectTrait.Genius
    ].map(trait => {
      return { value: trait, text: nameOfIntellectTrait(trait) };
    });
  }

  get childhoodTraitOptions() {
    return [
      ChildhoodTrait.Bossy,
      ChildhoodTrait.Charming,
      ChildhoodTrait.Curious,
      ChildhoodTrait.Pensive,
      ChildhoodTrait.Rowdy
    ].map(trait => {
      return { value: trait, text: nameOfChildhoodTrait(trait) };
    });
  }

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
