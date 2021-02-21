//===- intellect-trait-select.component.ts - Intellect Trait Select Box ----===//
//
// Copyright (c) 2021 J. Morgan Lieberthal
// Licensed under the MIT License
//
//===-----------------------------------------------------------------------===//

import { Component, Prop, Vue } from "vue-property-decorator";
import WithRender from "./intellect-trait-select.template.html";

import { Character, IntellectTrait, nameOfIntellectTrait } from "@/models";

@WithRender
@Component
export default class IntellectTraitSelect extends Vue {
  @Prop() character!: Character;
  @Prop() kind!: string;

  readonly options = [
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

  get formGroupId(): string {
    return `${this.kind}-intellect-attribute-group`;
  }

  get selectBoxId(): string {
    return `${this.kind}-intellect-trait`;
  }
}
