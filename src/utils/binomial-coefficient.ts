//===- utils/binomial-coefficient.ts - Calculate a Binomial Coefficient ----===//
//
// Copyright (c) 2021 J. Morgan Lieberthal
// Licensed under the MIT License
//
//===-----------------------------------------------------------------------===//
///
/// These functions are based on the ts-probabilities library, which can be found
/// https://github.com/lidimayra/ts-probabilities.
///
//===-----------------------------------------------------------------------===//

import { factorial } from "./factorial";

export function binomialCoefficient(a: number, b: number): number {
  return factorial(a) / (factorial(a - b) * factorial(b));
}
