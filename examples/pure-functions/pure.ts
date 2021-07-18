import { assertEquals } from "https://deno.land/std@0.87.0/testing/asserts.ts";

// Example 1: Same result on every execution
function twice(x: number): number {
    return x * 2;
}

Deno.test("twice is a pure function", () => {
    const initialValue = 10;
    twice(initialValue);
    assertEquals(twice(initialValue), 20);
    assertEquals(twice(initialValue), 20);
});





