//===- acquisition-event-calculator.spec.ts - AcquisitionEventCalculator ---===//
//
// Copyright (c) 2021 J. Morgan Lieberthal
// Licensed under the MIT License
//
//===-----------------------------------------------------------------------===//

import { expect } from "chai";
import { AcquisitionEventCalculator } from "@/models/acquisition-event-calculator";
import { ChildhoodTrait, EducationFocus, IntellectTrait } from "@/models";
import { Guardian, Ward, createGuardian, createWard } from "./helpers";

describe("AcquisitionEventCalculator", () => {
  let guardian: Guardian;
  let ward: Ward;
  let calc: AcquisitionEventCalculator;

  beforeEach(() => {
    guardian = createGuardian();
    guardian.intellectTrait = IntellectTrait.Intelligent;
    ward = createWard(w => {
      w.childhoodTrait = ChildhoodTrait.Pensive;
      w.educationFocus = EducationFocus.Diplomacy;
      w.intellectTrait = IntellectTrait.Genius;
    });
    calc = new AcquisitionEventCalculator(guardian, ward);
  });

  describe("#constructor", () => {
    it("properly assigns guardian", () => {
      expect(calc.guardian).to.eq(guardian);
    });

    it("properly assigns ward", () => {
      expect(calc.ward).to.eq(ward);
    });
  });

  describe("#successWeightTotal", () => {
    it("returns the result of the successWeightCalculator", () => {
      expect(calc.successWeightTotal).to.be.approximately(97.4, 0.001);
    });
  });

  describe("#failureWeightTotal", () => {
    it("returns the result of the failureWeightCalculator", () => {
      expect(calc.failureWeightTotal).to.be.approximately(40, 0.001);
    });
  });

  describe("#successOdds", () => {
    it("returns the percentage chance of success", () => {
      expect(calc.successOdds).to.be.approximately(0.709, 0.01);
    });
  });

  describe("#failureOdds", () => {
    it("returns the percentage chance of failure", () => {
      expect(calc.failureOdds).to.be.approximately(0.291, 0.01);
    });
  });

  describe("#successPercentageChance", () => {
    it("returns the value of #successOdds, but as a percentage", () => {
      expect(calc.successPercentageChance).to.be.approximately(70.89, 0.01);
    });
  });

  describe("#failurePercentageChance", () => {
    it("returns the value of #failureOdds, but as a percentage", () => {
      expect(calc.failurePercentageChance).to.be.approximately(29.11, 0.01);
    });
  });
});
