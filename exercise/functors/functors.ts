import { assertEquals } from "https://deno.land/std@0.87.0/testing/asserts.ts";


// Exercise 1: Convert this code using Array Functor.
Deno.test("double trouble", () => {
  const arr = [2,6,1,7,9,12];
  for(let i=0; i<arr.length; i++){
      arr[i] = arr[i]+1;
  }
  for(let i=0; i<arr.length; i++){
      arr[i] = arr[i]*2;
  }
  for(let i=0; i<arr.length; i++){
    arr[i] = arr[i]*arr[i];
  }

  assertEquals(arr, [36,196,16,256,400,676]);
});


// Exercise 2: Lets make our Functor iterable
Deno.test("expand it", () => {
    const Functor = (val:any ) => ({}); // fill in the implementation here
    const arr = ["common", ...Functor("functorValue1"), "common val2", ...Functor("functorValue2")];
  
    assertEquals(arr, ["common", "functorValue1", "common val2", "functorValue2"]);
  });