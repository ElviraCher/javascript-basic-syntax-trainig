import { pow } from "./exercise6.3";

describe("pow", () => {
  it("is a function", () => {
    expect(pow).toBeInstanceOf(Function);
  });

  const values = [
    [2, 3, 8],
    [3, 3, 27],
    [3, 2, 9],
    [15, 1, 15],
  ];
  values.forEach(([a, x, result]) => {
    it(`number ${a} in pow ${x} is ${result}`, () => {
      expect(pow(a, x)).toEqual(result);
    });
  });
});
