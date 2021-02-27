import { IMonoid } from "./monoid.interface.ts";

export class Product implements IMonoid<Product> {
  public val: number;
  constructor(x: number) {
    this.val = x;
  }
  
  public concat(operand: Product): Product {
    return new Product(this.val * operand.val);
  }

  static empty() {
    return new Product(1);
  }
}