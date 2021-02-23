//===- models/guardian.ts - Guardian Model ---------------------------------===//
//
// Copyright (c) 2021 J. Morgan Lieberthal
// Licensed under the MIT License
//
//===-----------------------------------------------------------------------===//

import { Character } from "./character";
import { AttributeArguments } from "./attributes";

export class Guardian extends Character {
  constructor({
    diplomacy,
    martial,
    stewardship,
    intrigue,
    learning
  }: AttributeArguments = {}) {
    super();
    this.diplomacy = diplomacy !== undefined ? diplomacy : this.diplomacy;
    this.martial = martial !== undefined ? martial : this.martial;
    this.stewardship =
      stewardship !== undefined ? stewardship : this.stewardship;
    this.intrigue = intrigue !== undefined ? intrigue : this.intrigue;
    this.learning = learning !== undefined ? learning : this.learning;
  }
}
