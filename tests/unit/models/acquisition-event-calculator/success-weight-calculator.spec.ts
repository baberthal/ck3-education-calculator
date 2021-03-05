//===- success-weight-calculator.spec.ts - SuccessWeightCalculator spec ----===//
//
// Copyright (c) 2021 J. Morgan Lieberthal
// Licensed under the MIT License
//
//===-----------------------------------------------------------------------===//

import { expect } from "chai";
import { ChildhoodTrait, IntellectTrait, EducationFocus } from "@/models";
import { SuccessWeightCalculator } from "@/models/acquisition-event-calculator";

import { Guardian, Ward, createGuardian, createWard } from "./helpers";

describe("SuccessWeightCalculator", () => {
  let guardian: Guardian;
  let ward: Ward;
  let calc: SuccessWeightCalculator;

  beforeEach(() => {
    guardian = createGuardian();
    guardian.intellectTrait = IntellectTrait.Intelligent;
    ward = createWard(w => {
      w.childhoodTrait = ChildhoodTrait.Pensive;
      w.educationFocus = EducationFocus.Diplomacy;
      w.intellectTrait = IntellectTrait.Genius;
    });
    calc = new SuccessWeightCalculator(guardian, ward);
  });

  describe("#baseWeight", () => {
    it("has a base weight of 60", () => {
      expect(calc.baseWeight).to.eq(60);
    });
  });

  describe("#wardIntellectTraitModifier", () => {
    it("returns 0 if the ward has no IntellectTrait", () => {
      ward.intellectTrait = IntellectTrait.None;
      expect(calc.wardIntellectTraitModifier).to.eq(0);
    });

    it("returns 10 if the ward is quick", () => {
      ward.intellectTrait = IntellectTrait.Quick;
      expect(calc.wardIntellectTraitModifier).to.eq(10);
    });

    it("returns 15 if the ward is intelligent", () => {
      ward.intellectTrait = IntellectTrait.Intelligent;
      expect(calc.wardIntellectTraitModifier).to.eq(15);
    });

    it("returns 20 if the ward is a genius", () => {
      ward.intellectTrait = IntellectTrait.Genius;
      expect(calc.wardIntellectTraitModifier).to.eq(20);
    });
  });

  describe("#guardianStatOfEducationFocus", () => {
    it("properly calculates the modifier", () => {
      ward.educationFocus = EducationFocus.Diplomacy;
      expect(calc.guardianStatOfEducationFocus).to.be.approximately(5.6, 0.001);
    });
  });

  describe("#guardianLearningStat", () => {
    it("properly calculates the modifier", () => {
      expect(calc.guardianLearningStat).to.eq(1.8);
    });
  });

  describe("#childhoodTraitMatch", () => {
    it("properly calculates the modifier", () => {
      expect(calc.childhoodTraitMatch).to.eq(0);
    });
  });

  describe("#childhoodTraitMismatch", () => {
    it("properly calculates the modifier", () => {
      expect(calc.childhoodTraitMismatch).to.eq(0);
    });
  });

  describe("#total", () => {
    it("sums the relevant calculations", () => {
      expect(calc.total).to.be.approximately(97.4, 0.001);
    });
  });
});
