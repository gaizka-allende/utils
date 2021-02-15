import join from "./join";

it("joins", () => {
  expect(join(["a", "b", "c"], "~")).toEqual("a~b~c");
});
