import intersectionBy from "./intersectionBy";

it("returns all objects with the same x property", () => {
  expect(
    intersectionBy(
      [
        { x: 1, y: 2 },
        { x: 3, y: 2 },
        { x: 2, y: 2 },
        { x: 1, y: 3 },
        { x: 4, y: 3 },
      ],
      "x"
    )
  ).toEqual([
    { x: 1, y: 2 },
    { x: 1, y: 3 },
  ]);
});
