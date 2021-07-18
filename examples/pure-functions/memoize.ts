import { assertEquals } from "https://deno.land/std@0.87.0/testing/asserts.ts";
import { memoizer } from "../../lib/index.ts";

// Example 1: Memoization of pure function
// O(n*n)
function expensivePureFunction(num: number): number {
    let sum = 0;
    for (let outer = 1; outer <= num; outer++) {
        for (let inner = 1; inner <= num; inner++) {
            sum += inner + outer
        } 
    }
    return sum;
}

Deno.test("Pure functions are easy to memoize", () => {
    const memoizedFunction = memoizer(expensivePureFunction);
    assertEquals(memoizedFunction(10), 1100); // First execution O(n*n)
    assertEquals(memoizedFunction(10), 1100); // Second execution O(1), because the result is memoized for this input
})


// Why can't we memoize an impure function?
// Let's consider this example of a function which accessing global value
let global = 3;

function impureFunction(x: number): number {
    return x * 2 + global; 
}

Deno.test("Can't memoize impure functions", () => {
    const memoizedFunction = memoizer(impureFunction);
    assertEquals(23, memoizedFunction(10)); // 23
    global = 10;
    assertEquals(30, memoizedFunction(10)); // Test will fail here, as it will return the memoized value
})