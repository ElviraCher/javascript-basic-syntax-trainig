const isWord = require("./exercise6.2");

it("word without space to be true word", () => {
  expect(isWord("mother")).toBeTruthy();
  expect(isWord("JavaScript")).toBeTruthy();
});

it("some words with space between it to be false, because it is not word", () => {
  expect(isWord("JavaScript Basic")).toBeFalsy();
  expect(isWord("I want to sleep")).toBeFalsy();
});
