import { getCircleLengthAndSquare } from "./exercise9.2";

describe("getCircleLengthAndSquare", () => {
  it("is a function", () => {
    expect(getCircleLengthAndSquare).toBeInstanceOf(Function);
  });

  const values = [
    ["15", ["94.25", "706.86"]],
    ["18", ["113.10", "1017.88"]],
    ["6", ["37.70", "113.10"]],
  ];
  values.forEach(([radius, lengthAndSquare]) => {
    it(`circle with radius ${radius} has length
     ${lengthAndSquare[0]} and square ${lengthAndSquare[1]}`, () => {
      expect(getCircleLengthAndSquare(radius)).toEqual(lengthAndSquare);
    });
  });
});
