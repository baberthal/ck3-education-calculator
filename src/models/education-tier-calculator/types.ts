//===- education-tier-calculator/types.ts - Basic types for this module ----===//
//
// Copyright (c) 2021 J. Morgan Lieberthal
// Licensed under the MIT License
//
//===-----------------------------------------------------------------------===//

export type EducationTier = 1 | 2 | 3 | 4;

export interface RollConfiguration {
  points: number; // integer
  odds: number; // float
}
