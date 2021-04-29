const multAndSum = require("./exercise1.1");

it("Multiplication: 12 * 3 = 36, sum: 12 + 3 = 15", () => {
  expect(multAndSum(12, 3)).toEqual([36, 15]);
});

it("Multiplication: 2 * 2 = 4, sum: 2 + 2 = 4", () => {
  expect(multAndSum(2, 2)).toEqual([4, 4]);
});

it("Multiplication: 0 * 2 = 0, sum: 0 + 2 = 2", () => {
  expect(multAndSum(0, 2)).toEqual([0, 2]);
});

it("Multiplication: -5 * 5 = 25, sum: -5 + 5 = 0", () => {
  expect(multAndSum(-5, 5)).toEqual([-25, 0]);
});
