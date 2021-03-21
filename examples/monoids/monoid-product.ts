import { assertEquals } from "https://deno.land/std@0.87.0/testing/asserts.ts";

Deno.test("Calculate five factorial", () => {
  const arr = [1,2,3,4,5];
  const fiveFactorial = { val: arr[0]*arr[1]*arr[2]*arr[3]*arr[4] } // Re-implement this using reduce & Product monoid

  assertEquals(120, fiveFactorial.val, `5! is 120`);
});