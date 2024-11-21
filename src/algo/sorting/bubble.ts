const bubbleSort = (array: number[]) => {
  const arrayLength = array.length;

  for (let i = 0; i < arrayLength; i++) {

    for (let j = 0; j < arrayLength; j++) {
      const currentValue = array[j];
      const nextValue = array[j + 1]

      if (currentValue > nextValue) {
        const temp = array[j];

        array[j] = array[j+1];
        array[j+ 1] = temp;
      }
    }
  }

  return array;
};

console.log(bubbleSort([99, 44, 6, 2, 1, 5, 63]))
