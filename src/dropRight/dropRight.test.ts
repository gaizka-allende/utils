import dropRight from "./dropRight";

describe("dropRight", () => {
  test("return substring", () => {
    expect(dropRight([1, 2, 3], 2)).toEqual([1]);
  });
  test("return same string", () => {
    expect(dropRight([1, 2, 3], 4)).toEqual([1, 2, 3]);
  });
});
