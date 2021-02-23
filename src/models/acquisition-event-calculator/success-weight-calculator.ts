//===- success-weight-calculator.ts - SuccessWeightCalculator --------------===//
//
// Copyright (c) 2021 J. Morgan Lieberthal
// Licensed under the MIT License
//
//===-----------------------------------------------------------------------===//

import { IntellectTrait } from "../traits";

import { BaseCalculator } from "./base-calculator";
import {
  CHILDHOOD_TRAIT_FOCUS_MATCH_MULTIPLIER,
  CHILDHOOD_TRAIT_FOCUS_MISMATCH_MULTIPLIER,
  GUARDIAN_IS_SHREWD_MODIFIER,
  LEARNING_MODIFIER,
  SKILL_MODIFIER,
  WARD_IS_SHREWD_MODIFIER,
  childhoodTraitMatchesFocus,
  getPositiveGuardianIntellectTraitModifier,
  getPositiveWardIntellectTraitModifier
} from "./modifier-data";

export class SuccessWeightCalculator extends BaseCalculator {
  readonly baseWeight = 60;

  get wardIntellectTraitModifier(): number {
    return getPositiveWardIntellectTraitModifier(this.ward.intellectTrait);
  }

  get guardianIntellectTraitModifier(): number {
    return getPositiveGuardianIntellectTraitModifier(
      this.guardian.intellectTrait
    );
  }

  get guardianStatOfEducationFocus(): number {
    if (this.ward.hasNoGuardian) {
      return 0;
    }

    return (
      this.guardian.getAttribute(this.ward.educationFocus) * SKILL_MODIFIER
    );
  }

  get guardianLearningStat(): number {
    if (this.ward.hasNoGuardian) {
      return 0;
    }

    return this.guardian.learning * LEARNING_MODIFIER;
  }

  get childhoodTraitMatch(): number {
    if (this.childhoodTraitMatchCalculation === 1) {
      return CHILDHOOD_TRAIT_FOCUS_MATCH_MULTIPLIER;
    }

    return 0;
  }

  get childhoodTraitMismatch(): number {
    if (this.childhoodTraitMatchCalculation === -1) {
      return CHILDHOOD_TRAIT_FOCUS_MISMATCH_MULTIPLIER;
    }

    return 0;
  }

  get wardIsShrewdModifier(): number {
    if (
      this.ward.intellectTrait != IntellectTrait.Quick &&
      this.ward.isShrewd
    ) {
      return WARD_IS_SHREWD_MODIFIER;
    }

    return 0;
  }

  get guardianIsShrewdModifier(): number {
    if (this.ward.hasNoGuardian) {
      return 0;
    }

    if (
      this.guardianIntellectTraitModifier === 0 &&
      this.guardian.intellectTrait != IntellectTrait.None
    ) {
      return GUARDIAN_IS_SHREWD_MODIFIER;
    }

    return 0;
  }

  get total(): number {
    return (
      this.baseWeight +
      this.wardIntellectTraitModifier +
      this.guardianIntellectTraitModifier +
      this.guardianStatOfEducationFocus +
      this.guardianLearningStat +
      this.childhoodTraitMatch +
      this.childhoodTraitMismatch +
      this.wardIsShrewdModifier +
      this.guardianIsShrewdModifier
    );
  }

  private get childhoodTraitMatchCalculation(): number {
    return childhoodTraitMatchesFocus(
      this.ward.childhoodTrait,
      this.ward.educationFocus
    );
  }
}
