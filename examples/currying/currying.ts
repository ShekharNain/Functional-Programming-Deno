import { assertEquals } from "https://deno.land/std@0.87.0/testing/asserts.ts";
import { curry2 } from "../../lib/index.ts";

// Example 1: Curried multiplication
function mul(a: number, b: number) {
    return a * b;
}

Deno.test("Lazy multiplication", () => {
    const curriedMul = curry2(mul);
    const twice = curriedMul(2);
    assertEquals(twice(3), 6);
    assertEquals(twice(5), 10);

    const thrice = curriedMul(3);
    assertEquals(thrice(3), 9);
    assertEquals(thrice(5), 15);
})



