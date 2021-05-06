import {
  getSomeInformationFromArray,
  getSumOfEveryElemInArray,
  getNewArrayFromOldOne,
  getMaxAndMinElemFromArray,
} from "./exercise5";

describe("getSomeInformationFromArray", () => {
  let log;
  beforeEach(() => {
    log = console.log;
    console.log = jest.fn();
  });
  afterEach(() => {
    console.log = log;
  });
  it("is a function", () => {
    expect(getSomeInformationFromArray).toBeInstanceOf(Function);
  });
  it("calls console.log", () => {
    expect(console.log).not.toHaveBeenCalled();
    getSomeInformationFromArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(console.log).toHaveBeenCalled();
  });
});

describe("getSumOfEveryElemInArray", () => {
  const arrays = [
    [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 55],
    [[5, 15, 10, 40, 18, 26, 500, 47, 118, 4], 783],
    [[21, 12, 22, 45, 54, 89, 7, 89, 136, 10], 485],
  ];
  arrays.forEach(([array, sum]) => {
    it(`returns correct sum: ${sum} 
    of array's elements: ${array}`, () => {
      expect(getSumOfEveryElemInArray(array)).toEqual(sum);
    });
  });
});

describe("getNewArrayFromOldOne", () => {
  const oldAndNewArray = [
    [
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
    ],
    [
      [5, 15, 10, 40, 18, 26, 500, 47, 118, 4],
      [10, 30, 20, 80, 36, 52, 1000, 94, 236, 8],
    ],
    [
      [21, 12, 22, 45, 54, 89, 7, 89, 136, 10],
      [42, 24, 44, 90, 108, 178, 14, 178, 272, 20],
    ],
  ];
  oldAndNewArray.forEach(([oldArray, newArray]) => {
    it(`gets new array ${JSON.stringify(newArray)} 
    from old one ${JSON.stringify(oldArray)}`, () => {
      expect(getNewArrayFromOldOne(oldArray)).toEqual(newArray);
    });
  });
});

describe("getMaxAndMinElemFromArray", () => {
  const arraysBiggestAndSmallest = [
    [
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      [10, 1],
    ],
    [
      [5, 15, 10, 40, 18, 26, 500, 47, 118, 4],
      [500, 4],
    ],
    [
      [21, 12, 22, 45, 54, 89, 7, 89, 136, 10],
      [136, 7],
    ],
  ];
  arraysBiggestAndSmallest.forEach(([array, result]) => {
    it(`returns array with biggest: ${result[0]} 
    and smallest: ${result[1]} element`, () => {
      expect(getMaxAndMinElemFromArray(array)).toEqual(result);
    });
  });
});
