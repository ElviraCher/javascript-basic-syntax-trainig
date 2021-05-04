import { sumOfNums } from "./exercise1.3";

describe("sumOfNums", () => {
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
    expect(sumOfNums).toBeInstanceOf(Function);
  });

  it("calls console.log", () => {
    expect(console.log).not.toHaveBeenCalled();
    sumOfNums();
    expect(console.log).toHaveBeenCalled();
  });

  const values = [
    ["123", 6],
    ["111", 3],
    ["555", 15],
  ];
  values.forEach(([input, expectedResult]) => {
    it(`called function with user's input ${input}, expect ${expectedResult}`, () => {
      jest.spyOn(window, "prompt").mockImplementation(() => input);
      sumOfNums();
      expect(console.log).toHaveBeenCalledWith(expectedResult);
    });
  });

  it("bad user input", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "input");
    sumOfNums();
    expect(console.log).toHaveBeenCalledWith(
      `Unexpected input. You should input number`
    );
  });
});
