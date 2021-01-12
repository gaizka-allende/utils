import difference from "./difference";

test("inspect argument is not an array", () => {
  expect(difference(2, [2, 3])).toEqual(2);
});

test("exclude argument is not an array", () => {
  expect(difference([2, 1], 2)).toEqual([2, 1]);
});

test("excludes one item", () => {
  expect(difference([2, 1], [2, 3])).toEqual([1]);
});

test("excludes two items", () => {
  expect(difference([2, 1, 8], [2, 8])).toEqual([1]);
});
