//===- education-tier-calculator.spec.ts - ETC Spec ------------------------===//
//
// Copyright (c) 2021 J. Morgan Lieberthal
// Licensed under the MIT License
//
//===-----------------------------------------------------------------------===//

import { expect } from "chai";
import { NoLegacyEducationTierCalculator } from "@/models/education-tier-calculator";
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

describe("NoLegacyEducationTierCalculator", () => {
  let guardian: Guardian;
  let ward: Ward;
  let educationInfo: EducationInfo;
  let aec: AcquisitionEventCalculator;
  let epc: EducationProbabilityCalculator;
  let calc: NoLegacyEducationTierCalculator;

  beforeEach(() => {
    guardian = createGuardian();
    ward = createWard();
    educationInfo = new EducationInfo();
    aec = createAEC(guardian, ward);
    epc = createEducationProbabilityCalculator(aec);
    calc = new NoLegacyEducationTierCalculator(educationInfo, ward, epc);
  });

  describe("#universityBonus", () => {
    it("returns 0 if there is no university bonus", () => {
      ward.attendedUniversity = false;
      expect(calc.universityBonus).to.eq(0);
    });

    it("returns 12 if the ward attended university", () => {
      ward.attendedUniversity = true;
      expect(calc.universityBonus).to.eq(12);
    });
  });

  describe("#spouseBonus", () => {
    it("returns the number of tutelage events", () => {
      educationInfo.tutelageEvents = 2;
      expect(calc.spouseBonus).to.eq(2);
    });
  });

  describe("pointsNeededForTier", () => {
    it("returns 0 for tier 1", () => {
      expect(calc.pointsNeededForTier(1)).to.eq(0);
    });

    it("returns 7 for tier 2", () => {
      expect(calc.pointsNeededForTier(2)).to.eq(7);
    });

    it("returns 11 for tier 3", () => {
      expect(calc.pointsNeededForTier(3)).to.eq(11);
    });

    it("returns 15 for tier 4", () => {
      expect(calc.pointsNeededForTier(4)).to.eq(15);
    });
  });

  describe("#successfulRollsNeededForTier", () => {
    it("returns  0 for tier 1", () => {
      expect(calc.successfulRollsNeededForTier(1)).to.eq(0);
    });

    it("returns 4 for tier 2", () => {
      expect(calc.successfulRollsNeededForTier(2)).to.eq(4);
    });

    it("returns 6 for tier 3", () => {
      expect(calc.successfulRollsNeededForTier(3)).to.eq(6);
    });

    it("returns 8 for tier 4", () => {
      expect(calc.successfulRollsNeededForTier(4)).to.eq(8);
    });
  });
});
