import { assertEquals } from "https://deno.land/std@0.87.0/testing/asserts.ts";
import { Any } from "../../lib/monoid/any.ts";

Deno.test("Is there any negative element?", () => {
  const arr = [5,7,2,-3,1,10];
  const res = 
    arr
      .map(x => new Any(x > 0))
      .reduce((acc, v) => acc.concat(v), Any.empty());

  assertEquals(true, res.val);
});