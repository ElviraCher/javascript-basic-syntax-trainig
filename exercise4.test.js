import { getAdminNameAgeRole } from "./exercise4";

describe("getAdminNameAgeRole", () => {
  let log;
  beforeEach(() => {
    log = console.log;
    console.log = jest.fn();
    window.prompt = jest.fn();
  });
  afterEach(() => {
    console.log = log;
    jest.clearAllMocks();
  });
  it("is a function", () => {
    expect(getAdminNameAgeRole).toBeInstanceOf(Function);
  });
  it("calls prompt", () => {
    expect(window.prompt).not.toHaveBeenCalled();
    getAdminNameAgeRole();
    expect(window.prompt).toHaveBeenCalled();
  });
  it("calls console.log", () => {
    expect(console.log).not.toHaveBeenCalled();
    getAdminNameAgeRole();
    expect(console.log).toHaveBeenCalled();
  });

  const ageAndUser = [
    [27, { name: "John", age: 27 }],
    [56, { name: "John", age: 56 }],
    [12, { name: "John", age: 12 }],
  ];
  ageAndUser.forEach(([userInput, consoleOutput]) => {
    it(`calls console.log with ${JSON.stringify(consoleOutput)} 
    when user input is ${userInput}`, () => {
      jest.spyOn(window, "prompt").mockImplementation(() => userInput);
      getAdminNameAgeRole();
      expect(console.log).toHaveBeenCalledWith(consoleOutput);
    });
  });

  const adminAndUser = [
    [
      { name: "John", age: 29 },
      { name: "John", age: 29, role: "admin" },
    ],
    [
      { name: "John", age: 48 },
      { name: "John", age: 48, role: "admin" },
    ],
    [
      { name: "John", age: 18 },
      { name: "John", age: 18, role: "admin" },
    ],
  ];
  adminAndUser.forEach(([user, admin]) => {
    it("create copy of user object with new role", () => {
      jest.spyOn(window, "prompt").mockImplementation(() => user.age);
      getAdminNameAgeRole();
      const newAdmin = { ...user, role: "admin"};
      expect(newAdmin).toEqual(admin);
      expect(console.log).toHaveBeenCalledWith(admin);
    });
  });

  const values = [
    [{ name: "John", age: 29, role: "admin" }, "John", 29, "admin"],
    [{ name: "John", age: 48, role: "admin" }, "John", 48, "admin"],
    [{ name: "John", age: 18, role: "admin" }, "John", 18, "admin"],
  ];
  values.forEach(([admin, name, age, role]) => {
    it(`makes a destructuring assignment from object
     ${JSON.stringify(
       admin
     )} to name: ${name}, age: ${age}, role: ${role}`, () => {
      jest.spyOn(window, "prompt").mockImplementation(() => admin.age);
      getAdminNameAgeRole();
      expect(console.log).toHaveBeenCalledWith(name, age, role);
    });
  });
});
