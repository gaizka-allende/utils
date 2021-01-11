import difference from "./difference";

test("inspect argument is not an array", () => {
  expect(difference(2, [2, 3])).toEqual(2);
});

test("exclude argument is not an array", () => {
  expect(difference([2, 1], 2)).toEqual([2, 1]);
});

test("removes one item to exclude", () => {
  expect(difference([2, 1], [2, 3])).toEqual([1]);
});
