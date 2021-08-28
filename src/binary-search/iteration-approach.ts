/**
 * Используется только с отсортированым списком
 * Скорость измеряется не в секундах а к-ве операций
 */

export const iterativeBinarySearch = (array: string[] | number[], target: string | number): string => {
  console.time('Execution Time');

  let startIndex = 0;
  let endIndex: number = array.length - 1;
  let amountOfTries = 0;

  while (startIndex <= endIndex) {
    let middleIndex = Math.floor((startIndex + endIndex) / 2); // its middle of array to search

    amountOfTries++

    if (target === array[middleIndex]) {
      console.timeEnd('Execution Time');

      return `Target found at index ${middleIndex}, amount of tries ${amountOfTries}`;
    }

    if (target > array[middleIndex]) {
      startIndex = middleIndex + 1;
    }

    if (target < array[middleIndex]) {
      endIndex = middleIndex - 1;
    }
  }

  return 'No such target in array'
}

const LENGTH = 1000000
const arr = Array.from({length: LENGTH}, (_, i) => i + 1)
const x = 999;

const result = iterativeBinarySearch(arr, x);

console.log(result);

