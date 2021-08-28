export const builtinSort = (inputList: number[]): number[] => {
  console.time('Execution Time');

  const result = inputList.sort((a, b) => a - b);

  console.timeEnd('Execution Time');

  return result;
}

export const selectionSort = (inputList: number[]): number[] => {
  console.time('Execution Time');

  const list = [...inputList];
  const length = list.length;

  for (let first = 0; first < length; first++) {
    let minimum = first;

    for (let second = first + 1; second < length; second++) {
      if (list[minimum] > list[second]) {
        minimum = second;
      }
    }

    if (minimum !== first) {
      [list[first], list[minimum]] = [list[minimum], list[first]]
    }
  }

  console.timeEnd('Execution Time');

  return list;
}

const input = [2, 1, 4, 3]

selectionSort(input);
builtinSort(input);
