//Example: Word frequency in an array of books. Composition of Map & Sum
import { assertEquals } from "https://deno.land/std@0.87.0/testing/asserts.ts";
import { Sum } from "../../lib/index.ts";

const books = [
  "This is a book",
  "This is another book",
  "Yet another book"
];

const getValueIfExistElseEmpty = (map: Map<string, Sum>, key: string): Sum => 
 map.has(key) ? map.get(key) as Sum : Sum.empty();

const mergeMapMonoid = (map1: Map<string, Sum>, map2: Map<string, Sum>) => {
  const mergedMap = new Map(map1);
  map2.forEach((value, key) => mergedMap.set(key, value.concat(getValueIfExistElseEmpty(map1, key))));
  return mergedMap;
}

const getWordsMap = (str: string) => str
  .split(" ")
  .map(x => new Map<string, Sum>([[x, new Sum(1)]]))
  .reduce(mergeMapMonoid, new Map());

Deno.test("Word frequency in an array of books", () => {
  books
    .map(getWordsMap)
});