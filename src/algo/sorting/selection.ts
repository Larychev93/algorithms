const selectionSort = (array: number[]) => {
  const arrayLength = array.length;

  for (let i = 0; i < arrayLength; i++) {
    let minIndex = i;
    let minValue = array[i];

    for (let j = i + 1; j < arrayLength; j++) {
      const nextValue = array[j]

      minIndex = nextValue < minValue ? j : minIndex;
      minValue = array[minIndex];
    }

    array[minIndex] = array[i];
    array[i] = minValue;
  }

  return array;
}

console.log(selectionSort([99, 44, 6, 2, 1, 5, 63]));
