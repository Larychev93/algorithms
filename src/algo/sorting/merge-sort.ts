const mergeSort = (array: number[]): number[] => {
  const arrayLength = array.length;

  if (arrayLength === 1) {
    return array;
  }

  const middleIndex = Math.floor(arrayLength / 2);
  const left = array.slice(0, middleIndex);
  const right = array.slice(middleIndex);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left: number[], right: number[]) {
  const result = [];

  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);

      leftIndex++;

      continue;
    }

    if (left[leftIndex] > right[rightIndex]) {
      result.push(right[rightIndex]);

      rightIndex++;

      continue;
    }

  }

  return [...result, ...[...left.slice(leftIndex), ...right.slice(rightIndex)]]

}

console.log(mergeSort([12, 8, 9, 3, 11, 5, 4]));


