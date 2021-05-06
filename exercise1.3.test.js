import { sumOfNums } from "exercise1.3";

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

  const values = [
    ["123", 6],
    ["111", 3],
    ["555", 15],
  ];
  values.forEach(([input, expectedResult]) => {
    it(`calls with user's input ${input}, expect ${expectedResult}`, () => {
      expect(console.log).not.toHaveBeenCalled();
      jest.spyOn(window, "prompt").mockImplementation(() => input);
      sumOfNums();
      expect(console.log).toHaveBeenCalled();
      expect(console.log).toHaveBeenCalledWith(expectedResult);
    });
  });

  it("calls with bad user input", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "input");
    sumOfNums();
    expect(console.log).toHaveBeenCalledWith(
      `Unexpected input. You should input number`
    );
  });
});
