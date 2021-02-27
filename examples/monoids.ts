import { assertEquals } from "https://deno.land/std@0.87.0/testing/asserts.ts";
import { Sum, Any } from "../lib/index.ts";
// Example 1
const arr = [1,2,3,4,5];
const res = arr
.map(x => new Sum(x))
.reduce((acc, x) => acc.concat(x), Sum.empty());

assertEquals(15, res.val, `Summation of arr: ${arr}`);