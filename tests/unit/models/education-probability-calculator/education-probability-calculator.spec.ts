//===- education-probability-calculator.spec.ts - EPC Spec -----------------===//
//
// Copyright (c) 2021 J. Morgan Lieberthal
// Licensed under the MIT License
//
//===-----------------------------------------------------------------------===//

import { expect } from "chai";
import {
  Guardian,
  Ward,
  createGuardian,
  createWard,
  AcquisitionEventCalculator,
  createAEC
} from "../helpers";

import {
  IntellectTrait,
  ChildhoodTrait,
  EducationFocus
} from "@/models/traits";
import { EducationProbabilityCalculator } from "@/models/education-probability-calculator";

describe("EducationProbabilityCalculator", () => {
  let guardian: Guardian;
  let ward: Ward;
  let aec: AcquisitionEventCalculator;
  let calc: EducationProbabilityCalculator;

  beforeEach(() => {
    guardian = createGuardian();
    guardian.intellectTrait = IntellectTrait.Intelligent;
    ward = createWard(w => {
      w.childhoodTrait = ChildhoodTrait.Pensive;
      w.educationFocus = EducationFocus.Diplomacy;
      w.intellectTrait = IntellectTrait.Genius;
    });
    aec = createAEC(guardian, ward);
    calc = new EducationProbabilityCalculator(aec);
  });

  describe("#numberOfTrials", () => {
    it("returns 9", () => {
      expect(calc.numberOfTrials).to.eq(9);
    });
  });

  describe("#probabilityOfSuccess", () => {
    it("returns the AcquisitionEventCalculator's success odds", () => {
      expect(calc.probabilityOfSuccess).to.eq(aec.successOdds);
    });
  });

  describe("#probabilityOfFailure", () => {
    it("returns the AcquisitionEventCalculator's failure odds", () => {
      expect(calc.probabilityOfFailure).to.eq(aec.failureOdds);
    });
  });

  describe("#probabilityOf(x)", () => {
    it("calculates the probability of 9 successful rolls", () => {
      const p = calc.probabilityOf(9);
      expect(p).to.be.closeTo(0.0452, 0.001);
    });

    it("calculates the probability of 8 successful rolls", () => {
      const p = calc.probabilityOf(8);
      expect(p).to.be.closeTo(0.167, 0.001);
    });

    it("calculates the probability of 7 successful rolls", () => {
      const p = calc.probabilityOf(7);
      expect(p).to.be.closeTo(0.274, 0.001);
    });

    it("calculates the probability of 6 successful rolls", () => {
      const p = calc.probabilityOf(6);
      expect(p).to.be.closeTo(0.263, 0.001);
    });

    it("calculates the probability of 5 successful rolls", () => {
      const p = calc.probabilityOf(5);
      expect(p).to.be.closeTo(0.162, 0.001);
    });

    it("calculates the probability of 4 successful rolls", () => {
      const p = calc.probabilityOf(4);
      expect(p).to.be.closeTo(0.0665, 0.001);
    });

    it("calculates the probability of 3 successful rolls", () => {
      const p = calc.probabilityOf(3);
      expect(p).to.be.closeTo(0.0182, 0.001);
    });

    it("calculates the probability of 2 successful rolls", () => {
      const p = calc.probabilityOf(2);
      expect(p).to.be.closeTo(0.0032, 0.001);
    });

    it("calculates the probability of 1 successful roll", () => {
      const p = calc.probabilityOf(1);
      expect(p).to.be.closeTo(0.0003, 0.001);
    });
  });

  describe("#probabilities", () => {
    it("returns an array", () => {
      expect(calc.probabilities).to.be.an("Array");
    });

    it("the returned array has 9 items", () => {
      expect(calc.probabilities.length).to.eq(9);
    });
  });
});
