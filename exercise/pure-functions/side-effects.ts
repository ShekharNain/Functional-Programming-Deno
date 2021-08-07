// Convert all of these impure functions to pure, & make sure all of the tests succeed
import { assertEquals } from "https://deno.land/std@0.87.0/testing/asserts.ts";

// Example 1: Mutating the args
function twice(arr: number[]): number[] {
    return arr.map(element => 2* element);
}

function twiceFirstElement(arr: number[]): number {
    return arr[0] * 2;
}

Deno.test("mutating the arguments passed to the function", () => {
    const initialArray = [1,2,3,4,5];
    const _twicedArray = twice(initialArray);
    const updatedFirstElement = twiceFirstElement(initialArray);
    assertEquals(updatedFirstElement, 2); // Test will fail on this because the first element is modified in b/w the code flow
});

    




// Example 2. modifyinig something outside the scope of the function
// let offset = 0;
const arr = [1,2,3,4,5,6,7,8,9];

function getSum(itemsCount: number, offset: number) {
    let result = 0;
    for (let index = offset; index < offset + itemsCount; index++) {
        result += arr[index];
    }
    const newOffset = offset + itemsCount;
    return {
        result,
        offset: newOffset
    };
}

Deno.test("modifyinig something outside the scope of the function", () => {
    assertEquals(getSum(3, 0).result, 6);
    assertEquals(getSum(3, 0).result, 6);
})



// Example 3: throwing exception: interface of the function ain't clear enough
function mean(arr: number[]): number | null {
    if (arr.length == 0) {
        // throw Error("Empty array");
        return null;
    }
    const sum = arr.reduce((acc, element) => acc + element, 0);
    return sum / arr.length;
}

function variance(arr: number[]): number | null {
    const meanValue = mean(arr);
    if (arr.length == 0) {
        // throw Error("Empty array");
        return null;
    }
    if (!meanValue) {
        return null;
    }
    const modifiedArr = arr
        .map(val => val - meanValue);
    return mean(modifiedArr);
}

Deno.test("testing the mean", () => {
    const arr = [1, 2, 3, 4, 5];
    assertEquals(mean(arr), 3);
    assertEquals(mean([]), null); // Test will fail here
})

Deno.test("testing the variance", () => {
    const arr = [1, 2, 3, 4, 5];
    assertEquals(variance(arr), 0);
    assertEquals(mean([]), null); // Test will fail here
})









