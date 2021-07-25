import { assertEquals } from "https://deno.land/std@0.87.0/testing/asserts.ts";
import { partial, curry } from "https://deno.land/x/ramda@v0.27.2/mod.ts";

// Partial
// g(a,b,c)
// f = partial(g, 1) // Early application of first argument
// f(2,3) // Lazy application to the remaining arguments
// h = partial(g, 1, 2)
// h(4)

// Currying
// f = curry(g)
// f(1)(2)(3)
// f(1)(2, 3)
// f(1, 2)(3)
// f(1, 2, 3)

// Example 1: Curried multiplication
function mul(a: number, b: number) {
    return a * b;
}

Deno.test("Lazy multiplication", () => {
    const curriedMul = curry(mul);
    const twice = curriedMul(2);
    assertEquals(twice(3), 6);
    assertEquals(twice(5), 10);

    const thrice = curriedMul(3);
    assertEquals(thrice(3), 9);
    assertEquals(thrice(5), 15);
})

// Example 2: Partial & Curried version of a function
function calcSurfaceAreaOfCuboid(length: number, breadth: number, height: number) {
    const curriedMul = curry(mul);
    const twice = curriedMul(2);
    return twice(length*breadth + breadth*height + height*length);
}

Deno.test("Partial and currying of a function", () => {
    const curriedSurfaceArea = curry(calcSurfaceAreaOfCuboid);
    const length = 5;
    const partialSurfaceArea = partial(calcSurfaceAreaOfCuboid, [length]);
    const width = 6, height = 7;
    const areaCalcByPartial = partialSurfaceArea(width, height);
    const areaCalcByCurry = curriedSurfaceArea(length)(width)(height);
    assertEquals(areaCalcByPartial, areaCalcByCurry)
})


