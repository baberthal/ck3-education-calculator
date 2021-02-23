//===- acquisition-event-calculator.ts - AcquisitionEventCalculator --------===//
//
// Copyright (c) 2021 J. Morgan Lieberthal
// Licensed under the MIT License
//
//===-----------------------------------------------------------------------===//

import { Guardian } from "../guardian";
import { Ward } from "../ward";
import { SuccessWeightCalculator } from "./success-weight-calculator";
import { FailureWeightCalculator } from "./failure-weight-calculator";

export class AcquisitionEventCalculator {
  successWeightCalculator: SuccessWeightCalculator;
  failureWeightCalculator: FailureWeightCalculator;

  constructor(public guardian: Guardian, public ward: Ward) {
    this.successWeightCalculator = new SuccessWeightCalculator(guardian, ward);
    this.failureWeightCalculator = new FailureWeightCalculator(guardian, ward);
  }

  get successWeightTotal(): number {
    return this.successWeightCalculator.total;
  }

  get failureWeightTotal(): number {
    return this.failureWeightCalculator.total;
  }

  get successOdds(): number {
    return this.successWeightTotal / this.totalWeight;
  }

  get failureOdds(): number {
    return this.failureWeightTotal / this.totalWeight;
  }

  get successPercentageChance(): number {
    return this.successOdds * 100;
  }

  get failurePercentageChance(): number {
    return this.failureOdds * 100;
  }

  private get totalWeight(): number {
    return this.successWeightTotal + this.failureWeightTotal;
  }
}
