//===- models/character.ts - Character Model -------------------------------===//
//
// Copyright (c) 2021 J. Morgan Lieberthal
// Licensed under the MIT License
//
//===-----------------------------------------------------------------------===//

import { IntellectTrait, EducationFocus } from "./traits";

export class Character {
  constructor() {
    this.diplomacy = 0;
    this.martial = 0;
    this.stewardship = 0;
    this.intrigue = 0;
    this.learning = 0;

    this.intellectTrait = IntellectTrait.None;
  }

  diplomacy: number;
  martial: number;
  stewardship: number;
  intrigue: number;
  learning: number;

  intellectTrait: IntellectTrait;

  isShrewd = false;
  isDull = false;

  getAttribute(focus: EducationFocus): number {
    switch (focus) {
      case EducationFocus.Diplomacy:
        return this.diplomacy;
      case EducationFocus.Martial:
        return this.martial;
      case EducationFocus.Stewardship:
        return this.stewardship;
      case EducationFocus.Intrigue:
        return this.intrigue;
      case EducationFocus.Learning:
        return this.learning;
    }
  }
}
