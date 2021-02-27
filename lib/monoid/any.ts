import { IMonoid } from "./monoid.interface.ts";

export class Any implements IMonoid<Any> {
  public val: number;
  constructor(x: number) {
    this.val = x;
  }
  
  public concat(operand: Any): Any {
    return new Any(this.val || operand.val);
  }

  static empty() {
    return new Any(1);
  }
}