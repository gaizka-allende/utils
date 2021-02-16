import every from "./every";

const users = [
  { user: "barney", location: "London", active: true },
  { user: "fred", location: "London", active: true },
  { user: "jim", location: "London", active: true },
];

it("iteratee with one property", () => {
  expect(every(users, { active: true })).toEqual(true);
});

it("multiple property iteratee", () => {
  expect(every(users, { location: "London", active: true })).toEqual(true);
});

it("multiple property iteratee falsy", () => {
  expect(every(users, { location: "London", active: false })).toEqual(false);
});
