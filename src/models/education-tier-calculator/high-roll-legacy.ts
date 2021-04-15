//===- high-roll-legacy.ts - High Roll Legacy Calculator -------------------===//
//
// Copyright (c) 2021 J. Morgan Lieberthal
// Licensed under the MIT License
//
//===-----------------------------------------------------------------------===//

import { BaseEducationTierCalculator } from "./base";
import { RollConfiguration } from "./types";

export class HighRollLegacyEducationTierCalculator extends BaseEducationTierCalculator {
  get rollConfiguration(): RollConfiguration {
    return { points: 3, odds: 0.4 };
  }
}
