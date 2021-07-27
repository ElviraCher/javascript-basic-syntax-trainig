import { isCircleFitInSquare } from "./exercise2.3";

describe("isCircleFitInSquare", () => {
  it("is a function", () => {
    expect(isCircleFitInSquare).toBeInstanceOf(Function);
  });

  const valuesTrue = [
    [12, 16],
    [10, 15],
    [10, 16],
  ];
  valuesTrue.forEach(([circle, square]) => {
    it(`returns correct values when result is true:
     circle is ${circle} and square is ${square}`, () => {
      expect(isCircleFitInSquare(circle, square)).toBeTruthy();
    });
  });

  const valuesFalse = [
    [10, 12],
    [15, 16],
    [10, 10],
  ];
  valuesFalse.forEach(([circle, square]) => {
    it(`returns correct values when result is false:
     circle is ${circle} and square is ${square}`, () => {
      expect(isCircleFitInSquare(circle, square)).toBeFalsy();
    });
  });
});
