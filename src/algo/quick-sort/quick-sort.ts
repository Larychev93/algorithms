/**
 * Быстрая сортировка
 * Алгоритм
 *  1 выбрать опорный элемент в середине списка
 *  2 слева положитть массив элементов, которые меьнше значения опорного элемента
 *  3 справа положить массив  элементов, которые больше значения опорного элемента
 *  4 реккурсивно повторять операцию пока входные массивы не будут иметь длину меньше двух элементов
 */

const testArray = [1, 4, 7, 8, 0, 2, 5, 6, 9, 2, 3];

export const quickSort = (inputArray: number[]): number[] => {
  if (inputArray.length < 2) {
    return inputArray
  }

  const index = Math.floor(inputArray.length/2);
  const pivot = inputArray[index];
  const less = [];
  const greater = [];

  for (let i = 0; i < inputArray.length; i++) {
    if (pivot <= inputArray[i] && i !== index) {
      greater.push(inputArray[i])
    }

    if (pivot > inputArray[i] && i !== index) {
      less.push(inputArray[i])
    }
  }

  return quickSort(less).concat(pivot, quickSort(greater))
}

console.log(quickSort(testArray));
