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
