import { sumOfAllIntegers } from "./exercise3.1";

describe("sumOfAllIntegers", () => {
  let log;
  beforeEach(() => {
    log = console.log;
    console.log = jest.fn();
  });
  afterEach(() => {
    console.log = log;
  });

  it("is a function", () => {
    expect(sumOfAllIntegers).toBeInstanceOf(Function);
  });

  it("calls console.log", () => {
    expect(console.log).not.toHaveBeenCalled();
    sumOfAllIntegers();
    expect(console.log).toHaveBeenCalled();
  });

  const nums = [
    [50, 100, 3825],
    [20, 50, 1085],
    [50, 70, 1260],
    [10, 85, 3610],
  ];
  nums.forEach(([first, last, result]) => {
    it(`returns correct sum of numbers
     from ${first} to ${last} to be ${result}`, () => {
      sumOfAllIntegers(first, last);
      expect(console.log).toHaveBeenCalledWith(result);
    });
  });
});
