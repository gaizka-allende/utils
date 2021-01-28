import fill from "./fill";

describe("fill", () => {
  test("fills all elements", () => {
    expect(fill([1, 2, 3], "a")).toEqual(["a", "a", "a"]);
  });
  test("partly fills the array", () => {
    expect(fill([4, 6, 8, 10], "*", 1, 3)).toEqual([4, "*", "*", 10]);
  });
});
