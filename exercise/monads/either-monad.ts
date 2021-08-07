// Exception handling using Either monad

import { assertEquals } from "https://deno.land/std@0.87.0/testing/asserts.ts";

type Either = {
  map: (fn: any) => Either;
  flatMap: (fn: (x: any) => Either) => Either
  fold: (f: any, g: any) => any
}


const Right = (x: any): Either => ({
  map: (fn: any) => Right(fn(x)),
  flatMap: (fn: (x: any) => Either) => fn(x),
  fold: (_f: any, g: any) => g(x)
})


const Left = (x: any): Either => ({
  map: (_fn: any) => Left(x),
  flatMap: (_fn: (x: any) => Either) => Left(x),
  fold: (f: any, _g: any) => f(x)
})



function mean(arr: number[]): Either {
  if (arr.length == 0) {
      return Left("Empty Array");
  }
  const sum = arr.reduce((acc, element) => acc + element, 0);
  return Right(sum / arr.length);
}

function variance(arr: number[]): Either {
  const meanValue = mean(arr);
  return meanValue
    .flatMap((data: number) => {
      const modifiedArr = arr.map(val => val - data); 
      return mean(modifiedArr);
    });
}

Deno.test("test variance", () => {
  const arr = [1,2,3,4,5];
  assertEquals(variance(arr).fold(() => null, (x: number) => x), 0);
  assertEquals(variance([]).fold(() => null, (x: number) => x), null);
})