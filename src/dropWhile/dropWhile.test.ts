import dropWhile from "./dropWhile";

const users = [
  { user: "barney", location: "London", active: false },
  { user: "fred", location: "New York", active: false },
  { user: "pebbles", location: "London", active: true },
];

describe("dropWhile", () => {
  test("drop items using iteratee with just one property", () => {
    expect(dropWhile(users, { location: "New York" })).toEqual([
      { user: "barney", location: "London", active: false },
      { user: "pebbles", location: "London", active: true },
    ]);
  });
  test("drop items using iteratee with more than one property", () => {
    expect(dropWhile(users, { active: false, location: "London" })).toEqual([
      { user: "fred", location: "New York", active: false },
      { user: "pebbles", location: "London", active: true },
    ]);
  });
});
