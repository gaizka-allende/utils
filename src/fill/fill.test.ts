import fill from "./fill";

describe("fill", () => {
  test("fills all elements", () => {
    expect(fill([1, 2, 3], "a")).toEqual(["a", "a", "a"]);
  });
  test("partly fills the array using start and end", () => {
    expect(fill([4, 6, 8, 10], "*", 1, 3)).toEqual([4, "*", "*", 10]);
  });
  test("partly fills the array using only start", () => {
    expect(fill([4, 6, 8, 10], "*", 1)).toEqual([4, "*", "*", "*"]);
  });
});
