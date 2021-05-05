import { getMultiplicationTable } from "./exercise3.2";

describe("getMultiplicationTable", () => {
  let log;
  beforeEach(() => {
    log = console.log;
    console.log = jest.fn();
  });
  afterEach(() => {
    console.log = log;
  });
  it("is a function", () => {
    expect(getMultiplicationTable).toBeInstanceOf(Function);
  });
  it("calls console.log", () => {
    expect(console.log).not.toBeCalled();
    getMultiplicationTable();
    expect(console.log).toBeCalled();
  });
  const nums = [
    [7, 1, 7],
    [7, 2, 14],
    [7, 3, 21],
    [7, 4, 28],
    [7, 5, 35],
    [7, 6, 42],
    [7, 7, 49],
    [7, 8, 56],
    [7, 9, 63],
  ];
  nums.forEach(([number, operand, result]) => {
    it(`returns correct value for
     ${number} * ${operand} = ${result} `, () => {
      getMultiplicationTable(number);
      expect(console.log).toHaveBeenCalledWith(
        `${number} * ${operand} = ${result}`
      );
    });
  });
});
