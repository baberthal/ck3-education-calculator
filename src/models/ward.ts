//===- models/ward.ts - Ward Model -----------------------------------------===//
//
// Copyright (c) 2021 J. Morgan Lieberthal
// Licensed under the MIT License
//
//===-----------------------------------------------------------------------===//

import { Character } from "./character";
import { ChildhoodTrait, EducationFocus } from "./traits";

export class Ward extends Character {
  constructor() {
    super();
    this.childhoodTrait = ChildhoodTrait.Curious;
    this.educationFocus = EducationFocus.Stewardship;
  }

  childhoodTrait: ChildhoodTrait;
  educationFocus: EducationFocus;

  isInbred = false;
  hasNoGuardian = false;
  attendedUniversity = false;
}
