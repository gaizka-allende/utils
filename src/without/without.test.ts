import without from "./without";

it("removes excludes", () => {
  expect(without([2, 1, 2, 3], [1, 2])).toEqual([3]);
});
