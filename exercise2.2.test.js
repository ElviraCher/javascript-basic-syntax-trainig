import { getMonthName } from "./exercise2.2";

describe("getMonthName", () => {
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
    expect(getMonthName).toBeInstanceOf(Function);
  });

  it("calls console.log", () => {
    expect(console.log).not.toHaveBeenCalled();
    getMonthName();
    expect(console.log).toHaveBeenCalled();
  });

  const months = [
    ["1", "January"],
    ["2", "February"],
    ["5", "May"],
    ["12", "December"],
  ];
  months.forEach(([number, month]) => {
    it(`calls console.log with ${month}`, () => {
      jest.spyOn(window, "prompt").mockImplementation(() => number);
      getMonthName();
      expect(console.log).toHaveBeenCalled();
      expect(console.log).toHaveBeenCalledWith(month);
    });
  });

  it("calls with incorrect input", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "22");
    getMonthName();
    expect(console.log).toHaveBeenCalledWith(
      "You should enter a number from 0 to 12"
    );
  });
});
