import { assertEquals } from "https://deno.land/std@0.87.0/testing/asserts.ts";
import { compose } from "../../lib/index.ts";


function plus2(x: number): number {
    return x + 2;
}

function mulBy3(x: number): number {
    return x * 3;
}

// Example 1
Deno.test("Composition of two functions", () => {
    // Imperative approach
    // const twoAdded = plus2(1);
    // const thrice = mulBy3(twoAdded);

    // With Composition
    const composedFn = compose(mulBy3, plus2); // Point free definition of function. No arguments defined
    assertEquals(composedFn(1), 9);
    assertEquals(composedFn(10), 36);
});

// Example 2
Deno.test("Composition of more than two functions", () => {
    const composedFn = compose(
        mulBy3,
        plus2,
        plus2,
        mulBy3
    ); 
    assertEquals(composedFn(1), 21);
    assertEquals(composedFn(10), 102);
});




