import difference from "./difference";

test("excludes one item", () => {
  expect(difference([2, 1], [2, 3])).toEqual([1]);
});

test("excludes two items", () => {
  expect(difference([2, 1, 8], [2, 8])).toEqual([1]);
});
