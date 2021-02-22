import groupBy from "./groupBy";

const users = [
  { user: "barney", location: "London" },
  { user: "fred", location: "New York" },
  { user: "pebbles", location: "London" },
];

it("groups by property", () => {
  expect(groupBy(users, "location")).toEqual({
    London: [
      { user: "barney", location: "London" },
      { user: "pebbles", location: "London" },
    ],
    "New York": [{ user: "fred", location: "New York" }],
  });
});

it("groups by return of iteratee", () => {
  expect(groupBy([6.1, 4.2, 6.3], Math.floor)).toEqual({ '4': [4.2], '6': [6.1, 6.3] });
});
