import { assertEquals } from "https://deno.land/std@0.87.0/testing/asserts.ts";

Deno.test("Calculate five factorial", () => {
  const arr = [1,2,3,4,5];
  const fiveFactorial = { val: arr[0]*arr[1]*arr[2]*arr[3]*arr[4] } // Re-implement this using reduce & Product monoid

  assertEquals(120, fiveFactorial.val, `5! is 120`);
});

Deno.test("Is there any negative element?", () => {
  const arr = [5,7,2,-3,1,10];
  const res = { val: true }; // Re-implement this using reduce & Any monoid

  assertEquals(true, res.val, "Yes there is a negative element");
});

Deno.test("Which conuntry has the max no. of covid cases?", () => {
  interface ICovidReport {
    country: string;
    cases: number;
  }

  const covidReport: ICovidReport[] = [{
    country: "India",
    cases: 100000
  }, {
    country: "US",
    cases: 5000000
  }, {
    country: "China",
    cases: 7000
  }];
  
  assertEquals("US", "US");
});
