const getTodayPassMinutes = require("./exercise8.2");

describe("getTodayPassMinutes", () => {
  let log;
  beforeEach(() => {
    log = console.log;
    console.log = jest.fn();
  });
  afterEach(() => {
    console.log = log;
  });

  it("is a function", () => {
    expect(getTodayPassMinutes).toBeInstanceOf(Function);
  });

  it("calls console.log", () => {
    expect(console.log).not.toHaveBeenCalled();
    getTodayPassMinutes();
    expect(console.log).toHaveBeenCalled();
  });

  [
    ["8:00", 480],
    ["8:10", 490],
    ["2:15", 135],
  ].forEach(([time, expectedMinutes]) => {
    it(`calls console.log with number of minutes (${expectedMinutes}) from day start at ${time}`, () => {
      const [hours, minutes] = time.split(":").map(Number);
      jest.spyOn(Date.prototype, "getHours").mockImplementation(() => hours);
      jest
        .spyOn(Date.prototype, "getMinutes")
        .mockImplementation(() => minutes);
      getTodayPassMinutes();
      expect(console.log).toHaveBeenCalledWith(expectedMinutes);
    });
  });
});
