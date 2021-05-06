import { getStringsLength } from "./exercise1.2";

it('string length "JavaScript developer" + "Basic" to equal 25', () => {
  expect(getStringsLength("JavaScript developer", "Basic")).toBe(25);
});
