import findIndex from "./findIndex";

var users = [
  { user: "barney", location: "London", active: false },
  { user: "fred", location: "New York", active: false },
  { user: "pebbles", location: "London", active: true, type: "business" },
  { user: "michael", location: "London", active: false },
];

describe("findIndex", () => {
  test("use object iteratee with one property", () => {
    expect(findIndex(users, { location: "New York" })).toEqual(1);
  });
  test("use object iteratee with two properties", () => {
    expect(findIndex(users, { location: "London", active: true })).toEqual(2);
  });
  test("use property name as iteratee", () => {
    expect(findIndex(users, "type")).toEqual(2);
  });
});
