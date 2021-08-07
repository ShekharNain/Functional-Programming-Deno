import { assertEquals } from "https://deno.land/std@0.87.0/testing/asserts.ts";
import { Sum } from "../../lib/monoid/sum.ts";

// [1,2,3]

// 0

Deno.test("Calculate sum of first five natural numbers", () => {
  const arr = [1,2,3,4,5];
  const sumOfNum = arr
    .map(x => new Sum(x))
    .reduce((acc, v) => acc.concat(v), Sum.empty());

  assertEquals(sumOfNum.val, 15);
});

// Taks in lazy laguage
// 1: const val = takingINput()
// 2: execute(val)

