//===- education-tier-calculator/no-legacy.ts - No Legacy Calculator -------===//
//
// Copyright (c) 2021 J. Morgan Lieberthal
// Licensed under the MIT License
//
//===-----------------------------------------------------------------------===//

import { BaseEducationTierCalculator } from "./base";
import { RollConfiguration } from "./types";

export class NoLegacyEducationTierCalculator extends BaseEducationTierCalculator {
  get rollConfiguration(): RollConfiguration {
    return { points: 0, odds: 1 };
  }
}
