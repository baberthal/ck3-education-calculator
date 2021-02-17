//===- models/character.ts - Character Model -------------------------------===//
//
// Copyright (c) 2021 J. Morgan Lieberthal
// Licensed under the MIT License
//
//===-----------------------------------------------------------------------===//

import { ChildhoodTrait, IntellectTrait, EducationFocus } from "./traits";

export class Character {
  constructor() {
    this.diplomacy = 0;
    this.martial = 0;
    this.stewardship = 0;
    this.intrigue = 0;
    this.learning = 0;

    this.intellectTrait = IntellectTrait.None;
    this.childhoodTrait = ChildhoodTrait.Curious;
    this.educationFocus = EducationFocus.Stewardship;
  }

  diplomacy: number;
  martial: number;
  stewardship: number;
  intrigue: number;
  learning: number;

  childhoodTrait: ChildhoodTrait;
  intellectTrait: IntellectTrait;

  educationFocus: EducationFocus;

  isShrewd = false;
  isDull = false;
  isInbred = false;
}
