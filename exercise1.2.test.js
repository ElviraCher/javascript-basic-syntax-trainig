import { getStringsLength } from "./exercise1.2";

describe("getStringsLength", () => {
  it("is a function", () => {
    expect(getStringsLength).toBeInstanceOf(Function);
  });
  const strings = [
    ["my cat", "is the best in the whole world", 36],
    ["London", "is the capital of Great Britain", 37],
    ["my gorgeous", "revolver", 19],
  ];
  strings.forEach(([str1, str2, result]) => {
    it(`strings length: ${str1} + ${str2} is ${result}`, () => {
      expect(getStringsLength(str1, str2)).toBe(result);
    });
  });
});
