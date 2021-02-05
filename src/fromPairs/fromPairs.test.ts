import fromPairs from "./fromPairs";

describe("fromPairs", () => {
  test("splits into two pairs", () => {
    expect(
      fromPairs([
        ["a", 1],
        ["b", 2],
      ])
    ).toEqual({ a: 1, b: 2 });
  });
  test("splits into three pairs", () => {
    expect(
      fromPairs([
        ["a", 1],
        ["b", 2],
        ["c", 3],
      ])
    ).toEqual({ a: 1, b: 2, c: 3 });
  });
});
