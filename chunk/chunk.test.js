import chunk from "./chunk";

test("an array is not passed as first argument", () => {
  expect(chunk("abcd", 2)).toEqual("abcd");
});

test("number of chunks is not a number", () => {
  expect(chunk(["a", "b", "c", "d"], 'i')).toEqual([
    "a", "b", "c", "d",
  ]);
});

test("number of chunks is not a positive number", () => {
  expect(chunk(["a", "b", "c", "d"], -2)).toEqual([
    "a", "b", "c", "d",
  ]);
});


test("does not split it with one", () => {
  expect(chunk(["a", "b", "c", "d"], 1)).toEqual([
    "a", "b", "c", "d",
  ]);
});

test('does not split the array if exceeds number of items', () => {
  expect(chunk(["a", "b", "c", "d"], 5)).toEqual([
    "a", "b", "c", "d",
  ]);
});

test("splits into two of two", () => {
  expect(chunk(["a", "b", "c", "d"], 2)).toEqual([
    ["a", "b"],
    ["c", "d"],
  ]);
});

test("splits into two, one of two and another of three", () => {
  expect(chunk(["a", "b", "c", "d", "e"], 2)).toEqual([
    ["a", "b"],
    ["c", "d", "e"],
  ]);
});

