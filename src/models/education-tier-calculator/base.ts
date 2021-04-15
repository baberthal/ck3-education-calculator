//===- education-tier-calculator/base.ts - Base Education Tier Calculator --===//
//
// Copyright (c) 2021 J. Morgan Lieberthal
// Licensed under the MIT License
//
//===-----------------------------------------------------------------------===//

import { EducationInfo } from "../education-info";
import { Ward } from "../ward";
import { EducationProbabilityCalculator } from "../education-probability-calculator";

import {
  THRESHOLD_EDUCATION_TIER_2,
  THRESHOLD_EDUCATION_TIER_3,
  THRESHOLD_EDUCATION_TIER_4,
  UNIVERSITY_BONUS
} from "./constants";
import { EducationTier, RollConfiguration } from "./types";

export abstract class BaseEducationTierCalculator {
  readonly educationInfo: EducationInfo;
  readonly ward: Ward;
  readonly educationProbabilityCalculator: EducationProbabilityCalculator;

  // TODO: Refactor this constructor
  constructor(
    educationInfo: EducationInfo,
    ward: Ward,
    educationProbabilityCalculator: EducationProbabilityCalculator
  ) {
    this.educationInfo = educationInfo;
    this.ward = ward;
    this.educationProbabilityCalculator = educationProbabilityCalculator;
  }

  get universityBonus(): number {
    if (this.ward.attendedUniversity) {
      return UNIVERSITY_BONUS;
    }

    return 0;
  }

  get spouseBonus(): number {
    return this.educationInfo.tutelageEvents;
  }

  pointsNeededForTier(tier: EducationTier): number {
    switch (tier) {
      case 1:
        return 0;
      case 2:
        return THRESHOLD_EDUCATION_TIER_2 - this.extraPointsFromBonuses;
      case 3:
        return THRESHOLD_EDUCATION_TIER_3 - this.extraPointsFromBonuses;
      case 4:
        return THRESHOLD_EDUCATION_TIER_4 - this.extraPointsFromBonuses;
    }
  }

  successfulRollsNeededForTier(tier: EducationTier): number {
    if (tier === 1) {
      return 0;
    }

    return Math.ceil(
      (this.pointsNeededForTier(tier) - this.rollConfiguration.points) / 2
    );
  }

  cumulativeOddsForTier(tier: EducationTier): number {
    if (tier === 1) {
      return 1;
    }

    // TODO: Refactor this. The sum could probably be calculated in the same loop
    // as the filter.
    const rollsNeeded = this.successfulRollsNeededForTier(tier);
    const probabilities = this.educationProbabilityCalculator.probabilities.filter(
      x => x.n >= rollsNeeded
    );

    let sum = 0;
    for (let i = 0; i < probabilities.length; i++) {
      sum += probabilities[i].probability;
    }

    return sum;
  }

  totalOddsForTier(tier: EducationTier): number {
    const cumulativeOdds = this.cumulativeOddsForTier(tier);

    switch (tier) {
      case 4:
        return cumulativeOdds;
      case 3:
        return cumulativeOdds - this.cumulativeOddsForTier(4);
      case 2:
        return (
          cumulativeOdds -
          (this.cumulativeOddsForTier(4) + this.cumulativeOddsForTier(3))
        );
      case 1:
        return (
          cumulativeOdds -
          (this.cumulativeOddsForTier(4) +
            this.cumulativeOddsForTier(3) +
            this.cumulativeOddsForTier(2))
        );
    }
  }

  protected get extraPointsFromBonuses(): number {
    return this.universityBonus + this.spouseBonus;
  }

  protected abstract get rollConfiguration(): RollConfiguration;
}
