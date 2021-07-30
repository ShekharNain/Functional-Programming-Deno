// Exception handling using Either monad

import { assertEquals } from "https://deno.land/std@0.87.0/testing/asserts.ts";

type Either = {
  map: (fn: any) => Either;
  flatMap: (fn: any) => Either
  fold: (f: any, g: any) => any
}

const Left = (x: any): Either => ({
  map: (_fn: any) => Left(x),
  flatMap: (_fn: any) => Left(x),
  fold: (f: any, _g: any) => f(x)
})


const Right = (x: any): Either => ({
  map: (fn: any) => Right(fn(x)),
  flatMap: (fn: any) => fn(x),
  fold: (_f: any, g: any) => g(x)
})


function mean(arr: number[]): number {
  if (arr.length == 0) {
      throw Error("Empty array");
  }
  const sum = arr.reduce((acc, element) => acc + element, 0);
  return sum / arr.length;
}

function variance(arr: number[]): number {
  const meanValue = mean(arr);
  if (arr.length == 0) {
      throw Error("Empty array");
  }
  const modifiedArr = arr
      .map(val => val - meanValue);
  return mean(modifiedArr);
}

Deno.test("testing the variance", () => {
  const arr = [1, 2, 3, 4, 5];
  assertEquals(variance(arr), 0);
  assertEquals(mean([]), null); // Test will fail here
})