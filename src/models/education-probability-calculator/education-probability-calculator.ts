//===- education-probability-calculator.ts - Education Probability ---------===//
//
// Copyright (c) 2021 J. Morgan Lieberthal
// Licensed under the MIT License
//
//===-----------------------------------------------------------------------===//

import { AcquisitionEventCalculator } from "../acquisition-event-calculator";
import { binomialCoefficient } from "@/utils";

export interface ProbabilityInfo {
  n: number;
  probability: number;
}

export class EducationProbabilityCalculator {
  readonly numberOfTrials = 9;

  acquisitionEventCalculator: AcquisitionEventCalculator;

  constructor(aec: AcquisitionEventCalculator) {
    this.acquisitionEventCalculator = aec;
  }

  get probabilities(): ProbabilityInfo[] {
    const result: ProbabilityInfo[] = [];

    for (let i = 1; i <= this.numberOfTrials; i++) {
      const probability = this.probabilityOf(i);
      result.push({ n: i, probability });
    }

    return result;
  }

  get probabilityOfSuccess(): number {
    return this.acquisitionEventCalculator.successOdds;
  }

  get probabilityOfFailure(): number {
    return this.acquisitionEventCalculator.failureOdds;
  }

  probabilityOf(x: number): number {
    const bc = binomialCoefficient(this.n, x);
    return bc * Math.pow(this.p, x) * Math.pow(this.q, this.n - x);
  }

  private get n(): number {
    return this.numberOfTrials;
  }

  private get p(): number {
    return this.probabilityOfSuccess;
  }

  private get q(): number {
    return this.probabilityOfFailure;
  }
}
