const mergeSortedArrays = (firstArray: number[], secondArray: number[]) => {
  const mergedArray = [];

  if (firstArray.length === 0) {
    return secondArray;
  }

  if (secondArray.length === 0) {
    return firstArray;
  }

  let firstIndex = 0;
  let secondIndex = 0;

  while ((firstArray[firstIndex]) || secondArray[secondIndex]) {
    if (secondArray[secondIndex] === undefined || firstArray[firstIndex] < secondArray[secondIndex]) {
      mergedArray.push(firstArray[firstIndex]);

      firstIndex++;
    }

    if (firstArray[firstIndex] === undefined || secondArray[secondIndex] < firstArray[firstIndex]) {
      mergedArray.push(secondArray[secondIndex]);

      secondIndex++;
    }
  }

  return mergedArray;
}



const result = mergeSortedArrays([0, 4, 7, 21], [2, 3, 22])

console.log(result);
