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
    undefined,
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "November",
    "December",
  ];
  const nums = ["1", "2", "5"];
  nums.forEach(([number]) => {
    it(`calls console.log with ${months[number]}`, () => {
      jest.spyOn(window, "prompt").mockImplementation(() => number);
      getMonthName();
      expect(console.log).toHaveBeenCalledWith(months[number]);
    });
  });

  it("calls with incorrect input", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "0");
    getMonthName();
    expect(console.log).toHaveBeenCalledWith(undefined);
  });
});
