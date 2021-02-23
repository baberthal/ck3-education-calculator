//===- base-calculator.ts - Base Calculator Class --------------------------===//
//
// Copyright (c) 2021 J. Morgan Lieberthal
// Licensed under the MIT License
//
//===-----------------------------------------------------------------------===//

import { Guardian, Ward } from "@/models";

export abstract class BaseCalculator {
  constructor(public guardian: Guardian, public ward: Ward) {}

  abstract get baseWeight(): number;

  abstract get total(): number;
}
