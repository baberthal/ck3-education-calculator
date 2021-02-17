//===- classes/Attributes.ts - Basic Character Attributes Class ------------===//
//
// Copyright (c) 2021 J. Morgan Lieberthal
// Licensed under the MIT License
//
//===-----------------------------------------------------------------------===//

export class Attributes {
  constructor() {
    this.diplomacy = 0;
    this.martial = 0;
    this.stewardship = 0;
    this.intrigue = 0;
    this.learning = 0;
  }

  diplomacy!: number;
  martial!: number;
  stewardship!: number;
  intrigue!: number;
  learning!: number;

  get total(): number {
    return (
      this.diplomacy +
      this.martial +
      this.stewardship +
      this.intrigue +
      this.learning
    );
  }
}

export type AttributeNames =
  | "diplomacy"
  | "martial"
  | "stewardship"
  | "intrigue"
  | "learning";

export default Attributes;
