import { getResultFromMatchingStringWithRegexp } from "./exercise10";

describe("getResultFromMatchingStringWithRegexp", () => {
  it("value is a date", () => {
    expect(getResultFromMatchingStringWithRegexp("12/03/2021")).toEqual(
      "It is date"
    );
    expect(getResultFromMatchingStringWithRegexp("12-03-2021")).toEqual(
      "It is date"
    );
  });
  it("value is a phone number", () => {
    expect(getResultFromMatchingStringWithRegexp("+79887445225")).toEqual(
      "It is phone number"
    );
    expect(getResultFromMatchingStringWithRegexp("8 586 259 14 41")).toEqual(
      "It is phone number"
    );
  });
  it("value is a email", () => {
    expect(
      getResultFromMatchingStringWithRegexp("plombir897@gmail.com")
    ).toEqual("It is email address");
    expect(
      getResultFromMatchingStringWithRegexp("IseCream123@yandex.ru")
    ).toEqual("It is email address");
  });
  it("value is an unexpected data", () => {
    expect(getResultFromMatchingStringWithRegexp("Javascript123")).toEqual(
      "Unexpected data"
    );
    expect(getResultFromMatchingStringWithRegexp("128956")).toEqual(
      "Unexpected data"
    );
  });
});
