import { getArithmeticMeanOfEveryOddNumbersFrom1ToN } from "./exercise3.3";

describe("getArithmeticMeanOfEveryOddNumbersFrom1ToN", () => {
  let log;
  beforeEach(() => {
    log = console.log;
    console.log = jest.fn();
    window.prompt = jest.fn();
  });
  afterEach(() => {
    console.log = log;
    window.prompt.mockClear();
  });
  it("is a function", () => {
    expect(getArithmeticMeanOfEveryOddNumbersFrom1ToN).toBeInstanceOf(Function);
  });
  it("calls prompt", () => {
    expect(window.prompt).not.toHaveBeenCalled();
    getArithmeticMeanOfEveryOddNumbersFrom1ToN();
    expect(window.prompt).toHaveBeenCalled();
  });
  it("calls console.log", () => {
    expect(console.log).not.toHaveBeenCalled();
    getArithmeticMeanOfEveryOddNumbersFrom1ToN();
    expect(console.log).toHaveBeenCalled();
  });
  const values = [
    [18, 9],
    [10, 5],
    [21, 11],
    [5, 3],
  ];
  values.forEach(([n, result]) => {
    it(`returns ${result} for number ${n}`, () => {
      jest.spyOn(window, "prompt").mockImplementation(() => n);
      getArithmeticMeanOfEveryOddNumbersFrom1ToN();
      expect(console.log).toHaveBeenCalledWith(result);
    });
  });
});
