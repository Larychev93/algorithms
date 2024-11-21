const insertionSort = (array: number[]) => {
  const arrayLength = array.length;

  for (let i = 0; i < arrayLength; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arrayLength; j++) {
      if (array[minIndex] > array[j]) {
        minIndex = j
      }
    }

    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]]
    }
  }

  return array;
}

console.log(insertionSort([99, 44, 6, 2, 1, 5, 63]));

// 44 , 99    6
