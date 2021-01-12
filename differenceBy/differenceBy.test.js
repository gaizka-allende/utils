import differenceBy from "./differenceBy";

test("inspect argument is not an array", () => {
  expect(differenceBy(2.3, [2.4, 3], Math.floor)).toEqual(2.3);
});

test("exclude argument is not an array", () => {
  expect(differenceBy([2.3, 1], 2.8, Math.floor)).toEqual([2.3, 1]);
});

test("iteratee is not a function nor a string", () => {
  expect(differenceBy([2.3, 1], [2.4], 32)).toEqual([2.3, 1]);
});

test("excludes one item", () => {
  expect(differenceBy([2.8, 1], [2.2, 3], Math.floor)).toEqual([1]);
});

test("excludes two items", () => {
  expect(differenceBy([3.8, 9.3, 4], [3.2, 4.2], Math.floor)).toEqual([9.3]);
});

test("excludes using one property", () => {
  expect(
    differenceBy(
      [
        { x: 1, y: 3 },
        { x: 2, y: 3 },
        { x: 3, y: 3 },
      ],
      [{ x: 1 }],
      "x"
    )
  ).toEqual([
    { x: 2, y: 3 },
    { x: 3, y: 3 },
  ]);
});
