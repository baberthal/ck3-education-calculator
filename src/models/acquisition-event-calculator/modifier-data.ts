//===- modifier-data.ts - Data for calculators in this directory -----------===//
//
// Copyright (c) 2021 J. Morgan Lieberthal
// Licensed under the MIT License
//
//===-----------------------------------------------------------------------===//

import { ChildhoodTrait, EducationFocus, IntellectTrait } from "../traits";

export const SKILL_MODIFIER = 0.4;
export const LEARNING_MODIFIER = 0.2;
export const CHILDHOOD_TRAIT_FOCUS_MATCH_MULTIPLIER = 20;
export const CHILDHOOD_TRAIT_FOCUS_MISMATCH_MULTIPLIER = -20;
export const WARD_IS_SHREWD_MODIFIER = 10;
export const GUARDIAN_IS_SHREWD_MODIFIER = 5;
export const GUARDIAN_IS_DULL_MODIFIER = 5;
export const WARD_IS_INBRED_MODIFIER = 20;
export const WARD_IS_DULL_MODIFIER = 10;
export const WARD_HAS_NO_GUARDIAN_MODIFIER = 20;

const CHILDHOOD_TRAIT_FOCUS_MATCH_TABLE = {
  [ChildhoodTrait.Bossy]: {
    [EducationFocus.Diplomacy]: -1,
    [EducationFocus.Martial]: 1,
    [EducationFocus.Stewardship]: 1,
    [EducationFocus.Intrigue]: 0,
    [EducationFocus.Learning]: 0
  },
  [ChildhoodTrait.Charming]: {
    [EducationFocus.Diplomacy]: 1,
    [EducationFocus.Martial]: 0,
    [EducationFocus.Stewardship]: -1,
    [EducationFocus.Intrigue]: 1,
    [EducationFocus.Learning]: 0
  },
  [ChildhoodTrait.Curious]: {
    [EducationFocus.Diplomacy]: 1,
    [EducationFocus.Martial]: -1,
    [EducationFocus.Stewardship]: 0,
    [EducationFocus.Intrigue]: 0,
    [EducationFocus.Learning]: 0
  },
  [ChildhoodTrait.Pensive]: {
    [EducationFocus.Diplomacy]: 0,
    [EducationFocus.Martial]: 0,
    [EducationFocus.Stewardship]: 1,
    [EducationFocus.Intrigue]: -1,
    [EducationFocus.Learning]: 1
  },
  [ChildhoodTrait.Rowdy]: {
    [EducationFocus.Diplomacy]: 0,
    [EducationFocus.Martial]: 1,
    [EducationFocus.Stewardship]: 0,
    [EducationFocus.Intrigue]: 1,
    [EducationFocus.Learning]: -1
  }
};

export function childhoodTraitMatchesFocus(
  trait: ChildhoodTrait,
  focus: EducationFocus
): number {
  return CHILDHOOD_TRAIT_FOCUS_MATCH_TABLE[trait][focus];
}

export function getPositiveWardIntellectTraitModifier(
  trait: IntellectTrait
): number {
  switch (trait) {
    case IntellectTrait.Quick:
      return 10;
    case IntellectTrait.Intelligent:
      return 15;
    case IntellectTrait.Genius:
      return 20;
    default:
      return 0;
  }
}

export function getNegativeWardIntellectTraitModifier(
  trait: IntellectTrait
): number {
  switch (trait) {
    case IntellectTrait.Imbecile:
      return 20;
    case IntellectTrait.Stupid:
      return 15;
    case IntellectTrait.Slow:
      return 10;
    default:
      return 0;
  }
}

export function getPositiveGuardianIntellectTraitModifier(
  trait: IntellectTrait
): number {
  switch (trait) {
    case IntellectTrait.Quick:
      return 5;
    case IntellectTrait.Intelligent:
      return 10;
    case IntellectTrait.Genius:
      return 15;
    default:
      return 0;
  }
}

export function getNegativeGuardianIntellectTraitModifier(
  trait: IntellectTrait
): number {
  switch (trait) {
    case IntellectTrait.Imbecile:
      return 15;
    case IntellectTrait.Stupid:
      return 10;
    case IntellectTrait.Slow:
      return 5;
    default:
      return 0;
  }
}
