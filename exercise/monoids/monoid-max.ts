import { assertEquals } from "https://deno.land/std@0.87.0/testing/asserts.ts";
import { IMonoid } from "../../lib/monoid/monoid.interface.ts";

interface ICovidReport {
  country: string;
  cases: number;
}

export class Max implements IMonoid<Max> {
  public val: ICovidReport;
  constructor(x: ICovidReport) {
    this.val = x;
  }
  
  public concat(operand: Max): Max {
    return new Max(operand.val.cases > this.val.cases ? operand.val: this.val)
  }

  static empty() {
    return new Max({
      country: "",
      cases: -1
    });
  }
}

// const obj = new Max(5);
// obj.concat(Max.empty()) // obj

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
  
  const maxCases = 
    covidReport
      .map(x => new Max(x))
      .reduce((acc, v) => {return acc.concat(v)}, Max.empty())
  
  assertEquals(maxCases.val.country, "India");
});