//===- failure-weight-calculator.ts - FailureWeightCalculator --------------===//
//
// Copyright (c) 2021 J. Morgan Lieberthal
// Licensed under the MIT License
//
//===-----------------------------------------------------------------------===//

import { IntellectTrait } from "../traits";

import { BaseCalculator } from "./base-calculator";
import {
  GUARDIAN_IS_DULL_MODIFIER,
  WARD_HAS_NO_GUARDIAN_MODIFIER,
  WARD_IS_DULL_MODIFIER,
  WARD_IS_INBRED_MODIFIER,
  getNegativeGuardianIntellectTraitModifier,
  getNegativeWardIntellectTraitModifier
} from "./modifier-data";

export class FailureWeightCalculator extends BaseCalculator {
  readonly baseWeight = 40;

  get wardNegativeIntellectTraitModifier(): number {
    return getNegativeWardIntellectTraitModifier(this.ward.intellectTrait);
  }

  get guardianNegativeIntellectTraitModifier(): number {
    return getNegativeGuardianIntellectTraitModifier(
      this.guardian.intellectTrait
    );
  }

  get wardIsInbredModifier(): number {
    if (
      this.ward.intellectTrait !== IntellectTrait.Imbecile &&
      this.ward.isInbred
    ) {
      return WARD_IS_INBRED_MODIFIER;
    }

    return 0;
  }

  get wardIsDullModifier(): number {
    if (this.ward.intellectTrait !== IntellectTrait.Slow && this.ward.isDull) {
      return WARD_IS_DULL_MODIFIER;
    }

    return 0;
  }

  get guardianIsDullModifier(): number {
    if (this.ward.hasNoGuardian) {
      return 0;
    }

    if (
      this.guardianNegativeIntellectTraitModifier === 0 &&
      this.guardian.isDull
    ) {
      return GUARDIAN_IS_DULL_MODIFIER;
    }

    return 0;
  }

  get wardHasNoGuardianModifier(): number {
    if (this.ward.hasNoGuardian) {
      return WARD_HAS_NO_GUARDIAN_MODIFIER;
    }

    return 0;
  }

  get total(): number {
    return (
      this.baseWeight +
      this.wardNegativeIntellectTraitModifier +
      this.guardianNegativeIntellectTraitModifier +
      this.wardIsInbredModifier +
      this.wardIsDullModifier +
      this.guardianIsDullModifier +
      this.wardHasNoGuardianModifier
    );
  }
}
