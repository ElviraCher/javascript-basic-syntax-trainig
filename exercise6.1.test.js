import { diff } from "./exercise6.1";

describe("diff", () => {
  it("is a function", () => {
    expect(diff).toBeInstanceOf(Function);
  });
  const values = [
    [6, 8, 2],
    [-3, 5, 8],
    [7, 7, 0],
    [110, 20, 90],
  ];
  values.forEach(([num1, num2, result]) => {
    it(`return difference: 
    ${result} between numbers: ${num1}, ${num2}`, () => {
      expect(diff(num1, num2)).toBe(result);
    });
  });
});
