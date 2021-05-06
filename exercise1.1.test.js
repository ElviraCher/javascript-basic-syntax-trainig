const multAndSum = require("./exercise1.1");

describe("multAndSum", () => {
  it("is a function", () => {
    expect(multAndSum).toBeInstanceOf(Function);
  });

  const values = [
    [12, 3, [36, 15]],
    [2, 2, [4, 4]],
    [0, 2, [0, 2]],
    [-5, 5, [-25, 0]],
  ];
  values.forEach(([num1, num2, result]) => {
    it(`Multiplication: ${num1} * ${num2} = ${result[0]}, 
    sum: ${num1} + ${num2} = ${result[1]}`, () => {
      expect(multAndSum(num1, num2)).toEqual(result);
    });
  });
});
