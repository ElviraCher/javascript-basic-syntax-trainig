const isWord = require("./exercise6.2");

describe("isWord", () => {
  it("is a function", () => {
    expect(isWord).toBeInstanceOf(Function);
  });
  const words = ["mother", "programming", "cat"];
  words.forEach(([word]) => {
    it(`${word} is a word`, () => {
      expect(isWord(word)).toBeTruthy();
    });
  });

  const strings = [
    "JavaScript Basic",
    "programming is cool",
    "I want to sleep",
  ];
  strings.forEach(([string]) => {
    it(`${string} is not a word`, () => {
      expect(isWord(string)).toBeFalsy();
    });
  });
});
