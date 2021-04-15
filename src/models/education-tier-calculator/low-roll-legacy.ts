//===- low-roll-legacy.ts - Low Roll Legacy Calculator ---------------------===//
//
// Copyright (c) 2021 J. Morgan Lieberthal
// Licensed under the MIT License
//
//===-----------------------------------------------------------------------===//

import { BaseEducationTierCalculator } from "./base";
import { RollConfiguration } from "./types";

export class LowRollLegacyEducationTierCalculator extends BaseEducationTierCalculator {
  get rollConfiguration(): RollConfiguration {
    return { points: 2, odds: 0.6 };
  }
}
