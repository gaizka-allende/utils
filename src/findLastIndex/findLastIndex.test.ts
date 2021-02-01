import findLastIndex from "./findLastIndex";

var users = [
  { user: "barney", location: "London", active: false },
  { user: "fred", location: "New York", active: false },
  { user: "pebbles", location: "London", active: true, type: "business" },
  { user: "michael", location: "London", active: false },
  { user: "george", location: "Geneva", type: "business" },
];

describe("findLastIndex", () => {
  test("use object iteratee with one property", () => {
    expect(findLastIndex(users, { location: "London" })).toEqual(3);
  });
  test("use object iteratee with two properties", () => {
    expect(findLastIndex(users, { location: "London", active: false })).toEqual(3);
  });
  test("use property name as iteratee", () => {
    expect(findLastIndex(users, "type")).toEqual(4);
  });
});
