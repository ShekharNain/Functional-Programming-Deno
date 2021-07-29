import { assertEquals } from "https://deno.land/std@0.87.0/testing/asserts.ts";

Deno.test("Calculate sum of first five natural numbers", () => {
  const arr = [1,2,3,4,5];
  const sumOfNum = { val: arr[0]+arr[1]+arr[2]+arr[3]+arr[4] } // Re-implement this using reduce & Sum monoid

  assertEquals(sumOfNum.val, 15);
});