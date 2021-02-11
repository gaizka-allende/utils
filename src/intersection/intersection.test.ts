import intersection from "./intersection";

it("finds common in two arrays", () => {
  expect(intersection([2, 1], [2, 3])).toEqual([2]);
});

it("adds only one common to the returned array", () => {
  expect(intersection([2, 1], [2, 2])).toEqual([2]);
});

it("finds common in three arrays", () => {
  expect(intersection([1, 2, 3], [1, 3, 4], [1, 3, 5])).toEqual([1, 3]);
});
