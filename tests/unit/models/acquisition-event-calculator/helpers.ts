//===- helpers.ts - Helpers / Setup for the specs in this directory --------===//
//
// Copyright (c) 2021 J. Morgan Lieberthal
// Licensed under the MIT License
//
//===-----------------------------------------------------------------------===//

import { AttributeArguments, Guardian, Ward } from "@/models";

export const guardianAttrs: AttributeArguments = {
  diplomacy: 14,
  martial: 10,
  stewardship: 12,
  intrigue: 9,
  learning: 9
};

export function createGuardian(
  attrs = guardianAttrs,
  fn?: (g: Guardian) => void
) {
  const guardian = new Guardian(attrs);
  if (fn) fn(guardian);
  return guardian;
}

export function createWard(fn?: (ward: Ward) => void) {
  const ward = new Ward();
  if (fn) fn(ward);
  return ward;
}

export { Guardian, Ward };
