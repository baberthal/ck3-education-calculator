//===- models/character.ts - Character Model -------------------------------===//
//
// Copyright (c) 2021 J. Morgan Lieberthal
// Licensed under the MIT License
//
//===-----------------------------------------------------------------------===//

import { IntellectTrait } from "./traits";

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
  isInbred = false;
}
