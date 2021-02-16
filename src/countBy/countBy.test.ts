import countBy from "./countBy";

it("counts based on iteratee", () => {
  expect(countBy([6.1, 4.2, 6.3], Math.floor)).toEqual({ "4": 1, "6": 2 });
});
