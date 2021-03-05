//===- failure-weight-calculator.spec.ts - FailureWeightCalculator Spec ----===//
//
// Copyright (c) 2021 J. Morgan Lieberthal
// Licensed under the MIT License
//
//===-----------------------------------------------------------------------===//

import { expect } from "chai";
import { FailureWeightCalculator } from "@/models/acquisition-event-calculator";
import { ChildhoodTrait, EducationFocus, IntellectTrait } from "@/models";
import { Guardian, Ward, createGuardian, createWard } from "./helpers";

describe("FailureWeightCalculator", () => {
  let guardian: Guardian;
  let ward: Ward;
  let calc: FailureWeightCalculator;

  beforeEach(() => {
    guardian = createGuardian();
    guardian.intellectTrait = IntellectTrait.Intelligent;
    ward = createWard(w => {
      w.childhoodTrait = ChildhoodTrait.Pensive;
      w.educationFocus = EducationFocus.Diplomacy;
      w.intellectTrait = IntellectTrait.Genius;
    });
    calc = new FailureWeightCalculator(guardian, ward);
  });

  describe("#baseWeight", () => {
    it("returns the constant base weight of 40", () => {
      expect(calc.baseWeight).to.eq(40);
    });
  });

  describe("#wardNegativeIntellectTraitModifier", () => {
    it("returns 0 if the ward has no negative intellect traits", () => {
      expect(calc.wardNegativeIntellectTraitModifier).to.eq(0);
    });

    it("returns 10 if the ward is slow", () => {
      ward.intellectTrait = IntellectTrait.Slow;
      expect(calc.wardNegativeIntellectTraitModifier).to.eq(10);
    });

    it("returns 15 if the ward is stupid", () => {
      ward.intellectTrait = IntellectTrait.Stupid;
      expect(calc.wardNegativeIntellectTraitModifier).to.eq(15);
    });

    it("returns 20 if the ward is an imbecile", () => {
      ward.intellectTrait = IntellectTrait.Imbecile;
      expect(calc.wardNegativeIntellectTraitModifier).to.eq(20);
    });
  });

  describe("#guardianNegativeIntellectTraitModifier", () => {
    it("returns 0 if the guardian has no negative intellect traits", () => {
      expect(calc.guardianNegativeIntellectTraitModifier).to.eq(0);
    });

    it("returns 5 if the guardian is slow", () => {
      guardian.intellectTrait = IntellectTrait.Slow;
      expect(calc.guardianNegativeIntellectTraitModifier).to.eq(5);
    });

    it("returns 10 if the guardian is stupid", () => {
      guardian.intellectTrait = IntellectTrait.Stupid;
      expect(calc.guardianNegativeIntellectTraitModifier).to.eq(10);
    });

    it("returns 15 if the guardian is an imbecile", () => {
      guardian.intellectTrait = IntellectTrait.Imbecile;
      expect(calc.guardianNegativeIntellectTraitModifier).to.eq(15);
    });
  });

  describe("#wardIsInbredModifier", () => {
    it("returns 0 if the ward is not inbred", () => {
      ward.isInbred = false;
      expect(calc.wardIsInbredModifier).to.eq(0);
    });

    it("returns 20 if the ward is inbred", () => {
      ward.isInbred = true;
      expect(calc.wardIsInbredModifier).to.eq(20);
    });

    it("returns 20 if the ward is both slow and inbred", () => {
      ward.intellectTrait = IntellectTrait.Slow;
      ward.isInbred = true;
      expect(calc.wardIsInbredModifier).to.eq(20);
    });

    it("returns 20 if the ward is both stupid and inbred", () => {
      ward.intellectTrait = IntellectTrait.Stupid;
      ward.isInbred = true;
      expect(calc.wardIsInbredModifier).to.eq(20);
    });

    it("returns 0 if the ward is both an imbecile and inbred", () => {
      ward.intellectTrait = IntellectTrait.Imbecile;
      ward.isInbred = true;
      expect(calc.wardIsInbredModifier).to.eq(0);
    });
  });

  describe("#wardIsDullModifier", () => {
    it("returns 0 if the ward is not dull", () => {
      ward.isDull = false;
      expect(calc.wardIsDullModifier).to.eq(0);
    });

    it("returns 10 if the ward is dull", () => {
      ward.isDull = true;
      expect(calc.wardIsDullModifier).to.eq(10);
    });

    it("returns 0 if the ward is dull and slow", () => {
      ward.isDull = true;
      ward.intellectTrait = IntellectTrait.Slow;
      expect(calc.wardIsDullModifier).to.eq(0);
    });
  });

  describe("#guardianIsDullModifier", () => {
    it("returns 0 if the guardian is not dull", () => {
      guardian.isDull = false;
      expect(calc.guardianIsDullModifier).to.eq(0);
    });

    it("returns 5 if the guardian is dull", () => {
      guardian.isDull = true;
      expect(calc.guardianIsDullModifier).to.eq(5);
    });

    it("returns 0 if the guardian is dull and has a negative intellect", () => {
      guardian.isDull = true;
      guardian.intellectTrait = IntellectTrait.Slow;
      expect(calc.guardianIsDullModifier).to.eq(0);
    });
  });

  describe("#wardHasNoGuardianModifier", () => {
    it("returns 0 if the ward has a guardian", () => {
      ward.hasNoGuardian = false;
      expect(calc.wardHasNoGuardianModifier).to.eq(0);
    });

    it("returns 20 if the ward has no guardian", () => {
      ward.hasNoGuardian = true;
      expect(calc.wardHasNoGuardianModifier).to.eq(20);
    });
  });

  describe("#total", () => {
    it("returns the total value of the weight modifiers", () => {
      expect(calc.total).to.eq(40);
    });
  });
});
