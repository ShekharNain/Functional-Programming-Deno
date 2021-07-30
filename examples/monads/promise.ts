import { assertEquals } from "https://deno.land/std@0.87.0/testing/asserts.ts";

Deno.test("Flat promise test", async () => {
  const initialPromise = new Promise<number>((res, _rej) => res(5));
  const finalPromise = // Promise<Promise<number>> or Promise<number> ??
    initialPromise 
      .then(data => data * 2)
      .then(data => 
        new Promise<number>((res, _rej) => res(data + 3))
      )
  const result = await finalPromise;
  assertEquals(result, 13);
})
