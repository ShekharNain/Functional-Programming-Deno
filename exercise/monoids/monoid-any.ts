import { assertEquals } from "https://deno.land/std@0.87.0/testing/asserts.ts";

Deno.test("Is there any negative element?", () => {
  const arr = [5,7,2,-3,1,10];
  const res = { val: true }; // Re-implement this using reduce & Any monoid

  assertEquals(true, res.val);
});