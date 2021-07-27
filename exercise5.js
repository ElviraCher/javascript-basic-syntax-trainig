export function getSumOfEveryElemInArray(array) {
  let sum = 0;
  array.forEach((el) => {
    sum += el;
  });
  return sum;
}

export function getNewArrayFromOldOne(array) {
  return array.map((el) => el * 2);
}

export function getMaxAndMinElemFromArray(array) {
  const max = array.reduce((maxValue, currentValue) =>
    currentValue > maxValue ? currentValue : maxValue
  );
  const min = array.reduce((minValue, currentValue) =>
    currentValue < minValue ? currentValue : minValue
  );
  return [max, min];
}

export function getSomeInformationFromArray(arr) {
  console.log(getSumOfEveryElemInArray(arr));
  console.log(getNewArrayFromOldOne(arr));
  console.log(getMaxAndMinElemFromArray(arr));
}
