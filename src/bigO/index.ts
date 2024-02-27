function logFirstTwoBoxes(boxes: number[]) {
  console.log(boxes[0]); // O(1)
  console.log(boxes[1]); // O(1)
}

logFirstTwoBoxes([0, 1, 2, 3, 4, 5]); // O(2)

function compressBoxes(boxes: number[]): void {
  boxes.forEach(box => {
    console.log(box) // O(1)
  });
}

compressBoxes(new Array(1000).fill(1)); // O(n) => O(1000)

const boxes = [1, 2, 3, 4, 5];

function logAllPairOfArray(array: any[]) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(i, j)
    }
  }
}

logAllPairOfArray(boxes) // O (n^2) // nested arrays
