import compact from "./compact";

test("string without falsy values passed", () => {
  expect(compact(["a", "b", "c"])).toEqual(["a", "b", "c"]);
});

test("removes all falsey values", () => {
  expect(compact(["a", "b", null, "c"])).toEqual(["a", "b", "c"]);
});
