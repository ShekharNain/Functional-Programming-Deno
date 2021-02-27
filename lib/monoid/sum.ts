import { IMonoid } from "./monoid.interface.ts";

export class Sum implements IMonoid<Sum> {
  public val: number;
  constructor(x: number) {
    this.val = x;
  }
  
  public concat(operand: Sum): Sum {
    return new Sum(this.val + operand.val);
  }

  static empty() {
    return new Sum(0);
  }
}