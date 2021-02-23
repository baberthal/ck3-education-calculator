//===- utils/random-int.ts - Returns a random integer ----------------------===//
//
// Copyright (c) 2021 J. Morgan Lieberthal
// Licensed under the MIT License
//
//===-----------------------------------------------------------------------===//

export function randomInt(floor = 1, ceil = 10): number {
  return Math.floor(Math.random() * (ceil - floor)) + floor;
}
