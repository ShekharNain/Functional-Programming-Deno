import { IMonoid } from "./monoid.interface.ts";

export class Any implements IMonoid<Any> {
  public val: boolean;
  constructor(x: boolean) {
    this.val = x;
  }
  
  public concat(operand: Any): Any {
    return new Any(this.val || operand.val);
  }

  static empty() {
    return new Any(false);
  }
}