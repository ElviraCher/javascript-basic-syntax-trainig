import { showMaxNumber } from "./exercise2.1";

describe("showMaxNumber", () => {
  let log;
  beforeEach(() => {
    log = console.log;
    console.log = jest.fn();
  });
  afterEach(() => {
    console.log = log;
  });

  it("is function", () => {
    expect(showMaxNumber).toBeInstanceOf(Function);
  });

  it("calls console.log", () => {
    expect(console.log).not.toHaveBeenCalled();
    showMaxNumber();
    expect(console.log).toHaveBeenCalled();
  });

  const nums = [
    [3, 15],
    [23, 21],
    [-4, 0],
  ];
  nums.forEach(([num1, num2]) => {
    it(`show result for max number of ${num1} and ${num2}`, () => {
      showMaxNumber(num1, num2);
      expect(console.log).toHaveBeenCalledWith(Math.max(num1, num2));
    });
  });
});
