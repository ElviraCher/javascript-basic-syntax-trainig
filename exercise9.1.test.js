const isTriangleRight = require("./exercise9.1");

const sidesRight = [
  [3, 4, 5],
  [10, 8, 6],
  [24, 18, 30],
];

sidesRight.forEach(([a, b, c]) => {
  it(`triangle with sides ${a}, ${b} and ${c} is right`, () => {
    expect(isTriangleRight(a, b, c)).toBeTruthy();
  });
});

const sidesOther = [
  [4, 4, 5],
  [9, 8, 6],
  [24, 18, 31],
];

sidesOther.forEach(([a, b, c]) => {
  it(`triangle with sides ${a}, ${b} and ${c} is not right`, () => {
    expect(isTriangleRight(a, b, c)).toBeFalsy();
  });
});
