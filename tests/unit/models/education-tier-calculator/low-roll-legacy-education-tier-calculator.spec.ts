//===- low-roll-legacy-education-tier-calculator.spec.ts - Spec ------------===//
//
// Copyright (c) 2021 J. Morgan Lieberthal
// Licensed under the MIT License
//
//===-----------------------------------------------------------------------===//

import { expect } from "chai";
import { LowRollLegacyEducationTierCalculator } from "@/models/education-tier-calculator";
import { EducationInfo } from "@/models";
import {
  AcquisitionEventCalculator,
  EducationProbabilityCalculator,
  Guardian,
  Ward,
  createAEC,
  createEducationProbabilityCalculator,
  createGuardian,
  createWard
} from "../helpers";

describe("LowRollLegacyEducationTierCalculator", () => {
  let guardian: Guardian;
  let ward: Ward;
  let educationInfo: EducationInfo;
  let aec: AcquisitionEventCalculator;
  let epc: EducationProbabilityCalculator;
  let calc: LowRollLegacyEducationTierCalculator;

  beforeEach(() => {
    guardian = createGuardian();
    ward = createWard();
    educationInfo = new EducationInfo();
    aec = createAEC(guardian, ward);
    epc = createEducationProbabilityCalculator(aec);
    calc = new LowRollLegacyEducationTierCalculator(educationInfo, ward, epc);
  });

  describe("#successfulRollsNeededForTier", () => {
    it("returns 0 for tier 1", () => {
      expect(calc.successfulRollsNeededForTier(1)).to.eq(0);
    });

    it("returns 3 for tier 2", () => {
      expect(calc.successfulRollsNeededForTier(2)).to.eq(3);
    });

    it("returns 5 for tier 3", () => {
      expect(calc.successfulRollsNeededForTier(3)).to.eq(5);
    });

    it("returns 7 for tier 4", () => {
      expect(calc.successfulRollsNeededForTier(4)).to.eq(7);
    });
  });
});
