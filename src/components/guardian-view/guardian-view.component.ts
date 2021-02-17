//===- guardian-view.component.ts - Guardian View Component ----------------===//
//
// Copyright (c) 2021 J. Morgan Lieberthal
// Licensed under the MIT License
//
//===-----------------------------------------------------------------------===//

import { Component, Prop, Vue } from "vue-property-decorator";
import WithRender from "./guardian-view.template.html";

import { Character, IntellectTrait, nameOfIntellectTrait } from "@/models";

@WithRender
@Component
export default class GuardianView extends Vue {
  @Prop() guardian!: Character;

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
}
