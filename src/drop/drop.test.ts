import drop from "./drop";

describe("drop", () => {
  test("return same array", () => {
    expect(drop([1, 2, 3], 0)).toEqual([1, 2, 3]);
  });
  test("return new array", () => {
    expect(drop([1, 2, 3], 2)).toEqual([3]);
  });
});
