import { assertEquals } from "https://deno.land/std@0.87.0/testing/asserts.ts";

interface ICovidReport {
  country: string;
  cases: number;
}

Deno.test("Which conuntry has the max no. of covid cases?", () => {

  const covidReport: ICovidReport[] = [{
    country: "India",
    cases: 10000000
  }, {
    country: "US",
    cases: 5000000
  }, {
    country: "China",
    cases: 7000
  }];
  
  const maxCases = "India" // Replace this with your implementation
  assertEquals(maxCases, "India");
});