import differenceBy from "./differenceBy";

test("inspect argument is not an array", () => {
  expect(differenceBy(2.3, [2.4, 3], Math.floor)).toEqual(2.3);
});

test("exclude argument is not an array", () => {
  expect(differenceBy([2.3, 1], 2.8, Math.floor)).toEqual([2.3, 1]);
});

test("iteratee is not a function", () => {
  expect(differenceBy([2.3, 1], [2.4], "notAFunction")).toEqual([2.3, 1]);
});

test("removes one item to exclude", () => {
  expect(differenceBy([2.8, 1], [2.2, 3], Math.floor)).toEqual([1]);
});
