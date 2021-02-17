//===- models/traits.ts - Character Traits ---------------------------------===//
//
// Copyright (c) 2021 J. Morgan Lieberthal
// Licensed under the MIT License
//
//===-----------------------------------------------------------------------===//

export enum IntellectTrait {
  Imbecile = -3,
  Stupid = -2,
  Slow = -1,
  None = 0,
  Quick = 1,
  Intelligent = 2,
  Genius = 3
}

export function nameOfIntellectTrait(trait: IntellectTrait): string {
  switch (trait) {
    case IntellectTrait.Imbecile:
      return "Imbecile";
    case IntellectTrait.Stupid:
      return "Stupid";
    case IntellectTrait.Slow:
      return "Slow";
    case IntellectTrait.None:
      return "None";
    case IntellectTrait.Quick:
      return "Quick";
    case IntellectTrait.Intelligent:
      return "Intelligent";
    case IntellectTrait.Genius:
      return "Genius";
  }
}

export enum ChildhoodTrait {
  Bossy,
  Charming,
  Curious,
  Pensive,
  Rowdy
}

export function nameOfChildhoodTrait(trait: ChildhoodTrait): string {
  switch (trait) {
    case ChildhoodTrait.Bossy:
      return "Bossy";
    case ChildhoodTrait.Charming:
      return "Charming";
    case ChildhoodTrait.Curious:
      return "Curious";
    case ChildhoodTrait.Pensive:
      return "Pensive";
    case ChildhoodTrait.Rowdy:
      return "Rowdy";
  }
}

export enum EducationFocus {
  Diplomacy,
  Martial,
  Stewardship,
  Intrigue,
  Learning
}

export function nameOfEducationFocus(focus: EducationFocus): string {
  switch (focus) {
    case EducationFocus.Diplomacy:
      return "Diplomacy";
    case EducationFocus.Martial:
      return "Martial";
    case EducationFocus.Stewardship:
      return "Stewardship";
    case EducationFocus.Intrigue:
      return "Intrigue";
    case EducationFocus.Learning:
      return "Learning";
  }
}
