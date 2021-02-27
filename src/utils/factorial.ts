//===- utils/factorial.ts - Calculate a Factorial --------------------------===//
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

export function factorial(x: number): number {
  let n = 1;
  for (let i = 2; i <= x; i++) {
    n *= i;
  }

  return n;
}
